from django.urls import path
from .views import get_movie_recommendation

urlpatterns = [
    path('movie_recommendations/', get_movie_recommendation, name='get_movie_recommendation'),
]