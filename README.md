# FilmFinder
A content-based movie recommendation system that suggests 10 films based on genre and similarity to your input. This web app helps you find movies similar to a movie you enter. 

## How It Works
Enter a film name and FilmFinder returns 10 recommendations based on genre and collection similarity using a dataset of ~45,000 films.

## Dataset
[The Movies Dataset](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset/)

## Tech Stack
**Backend**
- Python / Django
- pandas, scikit-learn
- CountVectorizer, cosine similarity

**Frontend**
- HTML (v1)
- React (coming soon)

## Version History
| Version | Description |
| :-------: | :-----------: |
| v1      | HTML based frontend to test functionality. Django backend for API |
| v2 (coming soon)      | React frontend |

## Recommendation System
The reccomendation model was built in Python using the following steps:
1. **Data cleaning**: loaded and cleaned a dataset of ~45,000 films, extracting relevant features like title, genres, and collection.
2. **Feature engineering**: combined title, genres, and collection into a single text field per film.
3. **Vectorization**: used ```CountVectorizer``` to convert text data into a numeric matrix.
4. **Similarity**: computed cosine similarity between all films to find the closest matches.
5. **Matrix Storage**: saved the similarity matrix as a ```.pkl``` file and loaded it into Django on server startup for fast lookups.
