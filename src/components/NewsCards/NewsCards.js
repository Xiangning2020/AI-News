import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, TextareaAutosize, Typography } from "@material-ui/core";
import useStyles from "./styles";

const infoCards = [
  { color: "#5e63b6", title: "Latest News", text: "Give me the latest news." },

  {
    color: "#21209c ",
    title: "News by Terms",
    info: "COVID-19, Bitcoin, Smartphones, Caliafornia, Facebook...",
    text: "What's up with Coronavirus?",
  },
  {
    color: "#3d6cb9",
    title: "News by Sources",
    info: "BBC News, ABC News,CNN, Wired, Time, IGN, Buzzfeed...",
    text: "Give me the news from CNN.",
  },
  {
    color: "#39065a ", //120078 ", //", //
    title: "News by Categories",
    info:
      "Health, Science, Education, Technology, Sports, Business, Entertainment, General",
    text: "Give me the latest Technology news.",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} lg={3} className={classes.infoCard}>
              <div
                style={{ backgroundColor: infoCard.color }}
                className={classes.card}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    {infoCard.title.split(" ")[2]}
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try Saying:
                  <br />
                  <strong>{infoCard.text}</strong>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <div className={classes.option}>
      <h1 style={{ color: "white", margin: "0 auto" }}>
        Try saying: "Open article number 3"/"Go back"
      </h1>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={item} i={i} activeArticle={activeArticle} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
};

export default NewsCards;
