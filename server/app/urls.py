from django.urls import path
from .views import get_movie_recommendation, index

urlpatterns = [
    path('', index, name='index'),
    path('movie_recommendations/', get_movie_recommendation, name='get_movie_recommendation'),
]