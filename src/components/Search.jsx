//NPM Packages
import { useParams } from "react-router-dom";

//Local Files
import { searchTitle } from "scripts/methods";
import { useTitles } from "state/TitlesProvider";
import useFetch from "hooks/useFetch";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import Thumbs from "./Thumbs";

export default function Search() {
  // Global state
  const { dispatchTitles } = useTitles();
  const titles = useFetch("title_test", dispatchTitles);

  //Local states
  const { query } = useParams();
  const results = searchTitle(titles.data, query);

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <main className="page-home">
          {results.length === 0 && <h1>No titles found ... </h1>}
          {results.length > 0 && <Thumbs data={results}>Results</Thumbs>}
        </main>
      )}
    </>
  );
}
