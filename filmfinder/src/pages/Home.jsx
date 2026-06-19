import Layout from "../components/Layout";
import { Button, TextField, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [recommendations, setRecommendations] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let movieSearch = e.target.movieSearch.value;

    try {
      const response = await axios.get(
        "http://localhost:8000/app/movie_recommendations",
        {
          params: {movie: movieSearch.trim()},
        },
      );

      setRecommendations(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label="Search Movie Recommendations"
            id="movieSearch"
            sx={{ width: "50%" }}
          />
          <Button type="submit" variant="contained" id="searchButton">
            Search
          </Button>
        </Stack>
      </form>
      <Stack spacing={1} sx={{mt: 4}}>
          {recommendations.map((movie, index) => (
            <div key={index}>{movie}</div>
          ))}
      </Stack>
    </Layout>
  );
}
