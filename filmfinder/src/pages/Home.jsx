import Layout from "../components/Layout";
import { Button, TextField, Stack } from "@mui/material";

export default function Home() {
  return (
    <Layout>
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
        <Button variant="contained" id="searchButton">
          Search
        </Button>
      </Stack>
    </Layout>
  );
}
