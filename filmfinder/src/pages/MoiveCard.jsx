import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Stack, Grid, styled, Paper } from "@mui/material";

export default function MovieCard() {
  const location = useLocation();
  const { movieName } = location.state;
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=6b7126c1&t=${movieName}`,
        );
        setMovieInfo(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMovieInfo();
  }, [movieName]);

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
      <Stack
        spacing={1}
        sx={{
          mt: 4,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid size={5}>
            <Item>
              <h2>{movieInfo.Title}</h2>
              <br />
              <img src={movieInfo.Poster} alt={movieInfo.Title} />
              <br />
              <br />
              <p>
                <b>Year:</b> {movieInfo.Year}
              </p>
              <p>
                <b>Genre:</b> {movieInfo.Genre}
              </p>
              <p>
                <b>Plot:</b> {movieInfo.Plot}
              </p>
            </Item>
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
}
