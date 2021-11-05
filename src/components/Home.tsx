//@ts-nocheck
//NPM Packages

//Local imports
import useFetch from "hooks/useFetch";
import Thumbs from "./Thumbs";
import Thumbs10 from "./Thumbs10";
import { useTitles } from "state/TitlesProvider";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import { getCategory, getTop10 } from "scripts/methods";
import Player from "components/Player";
import Hero from "./Hero";

export default function Teacher() {
  // Global state
  const { dispatchTitles } = useTitles();
  const titles = useFetch("title_test", dispatchTitles);

  //Local states
  const randomIndex = Math.floor(Math.random() * titles.data.length);
  const randomTitle = titles.data[randomIndex];
  const series = getCategory(titles.data, "serie");
  const films = getCategory(titles.data, "film");
  const documentaries = getCategory(titles.data, "documentary");
  const top10 = getTop10(titles.data);

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <>
          <div className="hero-bg">
            <Player video={randomTitle.trailer} autoplay="0" controls="0" />

            <div className="gradient" />
          </div>
          <main className="page-home">
            <Hero data={randomTitle} />

            <Thumbs data={series} category="serie">
              Series
            </Thumbs>
            <Thumbs data={films} category="film">
              Films
            </Thumbs>
            <Thumbs data={documentaries} category="serie">
              Documentaries
            </Thumbs>
            <Thumbs10 data={top10} />
            {/* <div className="footer-background" /> */}
          </main>
        </>
      )}
    </>
  );
}
