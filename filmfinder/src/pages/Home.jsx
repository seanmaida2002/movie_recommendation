import Layout from "../components/Layout";
import { Button, TextField, Stack, Grid, styled, Paper } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom'

export default function Home() {
  const [recommendations, setRecommendations] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let movieSearch = e.target.movieSearch.value;

    try {
      const response = await axios.get(
        "http://localhost:8000/app/movie_recommendations",
        {
          params: { movie: movieSearch.trim() },
        },
      );

      setRecommendations(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

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
      {/* <Stack spacing={1} sx={{mt: 4}}>
          {recommendations.map((movie, index) => (
            <div key={index}>{movie}</div>
          ))}
      </Stack> */}
      <Stack spacing={1} sx={{ mt: 4}}>
        <Grid container spacing={2} sx={{justifyContent: "center", alignItems: "center" }}>
          {recommendations.map((movie, index) => (
            <Grid size={5}>
              <Link className='movieName' to='/movie' state={{movieName: movie}} style={{color:'inherit'}}><Item key={index} sx={{color: "black"}}>{movie}</Item></Link>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Layout>
  );
}
