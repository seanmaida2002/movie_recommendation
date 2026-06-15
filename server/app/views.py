from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import pickle
import pandas as pd
from app.apps import AppConfig
from sklearn.metrics.pairwise import cosine_similarity

@api_view(['GET'])
def get_movie_recommendation(request):
    # movie_vectors = AppConfig.movie_vectors
    # movie_titles = AppConfig.movie_titles
    
    movie_matrix = AppConfig.movie_matrix
    
    input_movie = 'avengers: age of ultron'
    # idx = movie_titles[movie_titles == input_movie].index[0]
    # sim_scores = cosine_similarity(movie_vectors[idx], movie_vectors).flatten()

    # top_indices = sim_scores.argsort()[::-1][1:11]
    recommendations = movie_matrix[input_movie.lower()].nlargest(11)
    recommendations = recommendations[recommendations.index != input_movie.lower()]
    # recommendations = movie_titles.iloc[top_indices].tolist()
    return Response(recommendations.head(10).index.tolist())