import Layout from "../components/Layout";
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <Layout>
      <br />
      <TextField fullWidth label="Search Movie Recommendations" id="movieSearch" />
    </Layout>
  );
}
