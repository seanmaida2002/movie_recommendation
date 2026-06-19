from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
import pandas as pd
from app.apps import AppConfig
from sklearn.metrics.pairwise import cosine_similarity
from rest_framework.decorators import api_view


def index(request):
    return render(request, 'home.html')

@api_view(["GET"])
def get_movie_recommendation(request):  
    movie_matrix = AppConfig.movie_matrix
    
    input_movie = request.GET.get('movie', '').lower()
    recommendations = []
    if not input_movie or input_movie not in movie_matrix.columns:
        return Response([])
    
    results = movie_matrix[input_movie].nlargest(11)
    results = results[results.index != input_movie]
    recommendations = results.head(10).index.tolist()
    
    return Response(recommendations)
    # return render(request, 'home.html', {'recommendations': recommendations, 'input_movie': input_movie})