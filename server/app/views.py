from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
import pandas as pd
from app.apps import AppConfig
from sklearn.metrics.pairwise import cosine_similarity


def index(request):
    return render(request, 'home.html')


def get_movie_recommendation(request):  
    movie_matrix = AppConfig.movie_matrix
    
    input_movie = request.GET.get('movie', '').lower()
    recommendations = []
    if input_movie:
        if input_movie not in movie_matrix.columns:
            recommendations = []
        else:
            results = movie_matrix[input_movie].nlargest(11)
            results = results[results.index != input_movie.lower()]
            recommendations = results.head(10).index.tolist()
    
    # return Response(recommendations.head(10).index.tolist())
    return render(request, 'home.html', {'recommendations': recommendations, 'input_movie': input_movie})