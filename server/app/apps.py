from django.apps import AppConfig
from scipy.sparse import load_npz
import pandas as pd


class AppConfig(AppConfig):
    name = 'app'
    movie_matrix = None

    def ready(self):
        AppConfig.movie_matrix = pd.read_pickle('/Users/smaida/Desktop/movie_recommendation/server/matrix/movie_matrix.pkl')