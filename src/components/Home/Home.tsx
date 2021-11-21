//NPM Packages
import { FC } from "react";

//Local imports
import useFetch from "hooks/useFetch";
import Thumbs from "components/shared/Thumbs";
import Thumbs10 from "components/Home/Thumbs10";
import { useTitles } from "state/TitlesProvider";
import { BoxError, Spinner } from "components/shared/FetchItems";
import { getCategory, getTop10 } from "scripts/methods";
import Player from "components/shared/Player";
import Hero from "components/shared/Hero";
import iTitle from "types/iTitle";

const Home: FC = () => {
  // Global state
  //@ts-ignore
  const { dispatchTitles } = useTitles();
  const titles = useFetch("title_test", dispatchTitles);

  //Local states
  const autoplay = "0"; //Change to "1" here  to have video background running in production
  const randomIndex = Math.floor(Math.random() * titles.data.length);
  const randomTitle: iTitle = titles.data[randomIndex];
  const series = getCategory(titles.data, "serie");
  const films = getCategory(titles.data, "film");
  const documentaries = getCategory(titles.data, "documentary");
  const top10 = getTop10(titles.data);

  // safeguards
  if (titles.loading) return <Spinner />;
  if (titles.error !== null) return <BoxError />;

  // You have <> at the root for something that is clearly a page, you should use <div>, <main>, <section> instead depending on your sctructure.
  return (
    <>
      {/* These could be a early return, see example above to make it more organized */}
      {titles.loading && <Spinner />}
      {titles.error !== null && <BoxError />}

      {/* Clean code -1 */}
      {/* This double conditionals: You have to stop loading and make sure is not an error is inneficient and prone to erros */}
      {/* Refactor it to a single status variable that has a value of either "error", "loading", "loaded", etc */}
      {(!titles.loading && titles.error) === null && (
        <>
          <div className="hero-bg">
            <Player
              video={randomTitle.trailer}
              autoplay={autoplay}
              controls="0"
            />
            <div className="gradient" />
          </div>
          <main className="page-home">
            <Hero data={randomTitle} />
            <Thumbs data={series}>Series</Thumbs>
            <Thumbs data={films}>Films</Thumbs>
            <Thumbs data={documentaries}>Documentaries</Thumbs>
            <Thumbs10 data={top10} />
          </main>
        </>
      )}
    </>
  );
};
export default Home;
