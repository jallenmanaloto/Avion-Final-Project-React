import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Headlines = () => {
  //setting value for response from api
  const [headline, setHeadline] = useState([]);

  //fetching values from api
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://gnews.io/api/v4/search?q=ph&token=dda56b5e65c3a2247ddff00cc83d0283",
    })
      .then((res) => {
        setHeadline(res.data.articles);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //layout for mapped articles from api
  const articles = headline.map((article) => {
    return (
      <Grid item lg={10}>
        <Paper sx={{ mt: 3, mb: 3 }}>
          <Typography
            sx={{ p: 3, color: "#4d4d4d", width: "90%" }}
            variant="h5"
          >
            {article.title}
          </Typography>
          <Typography
            sx={{ pl: 3, color: "#4d4d4d", width: "90%" }}
            variant="body1"
          >
            {article.description}
          </Typography>
          <a href={article.url}>
            <img
              style={{
                marginLeft: "50%",
                marginBottom: "1rem",
                paddingTop: "2rem",
                width: "90%",
                objectFit: "cover",
                transform: "translateX(-50%)",
              }}
              src={article.image}
              alt="news-image"
            />
          </a>
        </Paper>
      </Grid>
    );
  });

  return (
    <Container sx={{ pt: 3 }} maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item lg={10}>
          <Typography
            sx={{ color: "#3376b5", pt: 2, pb: 2, fontWeight: 600 }}
            variant="h5"
          >
            Recent News
          </Typography>
        </Grid>
        {articles}
      </Grid>
    </Container>
  );
};

export default Headlines;
