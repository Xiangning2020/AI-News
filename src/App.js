import "./App.css";
import { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";
import wordsToNumbers from "words-to-numbers";

const alankey =
  "9e2132039f2c1e2df9dcd35d5f60f7632e956eca572e1d8b807a3e2338fdd0dc/stage";

// const api = "d818a5599abe406fac68ee66dc419700";
const alanLogoSrc =
  "https://cdn.dribbble.com/users/46123/screenshots/6135335/ai-sun-type.gif";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parseNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parseNumber - 1];
          console.log(parseNumber);
          if (parseNumber > 20) {
            alanBtn().playText("please try that again");
          } else if (article) {
            window.open(article.url);
            alanBtn().playText("Opening ... ");
          }
        }
      },
    });
  }, []);
  return (
    <div className="app">
      <div className={classes.logoContainer}>
        <img
          src={alanLogoSrc}
          alt="alan logo"
          className={classes.alanContainer}
        />
      </div>

      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
