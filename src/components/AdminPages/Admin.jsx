//NPM PAckages
import { useState } from "react";

//Local imports
import Sorter from "components/AdminPages/Sorter";
import CreateForm from "./forms/CreateForm";
import EditForm from "./forms/EditForm";
import { useTitles } from "state/TitlesProvider";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import useFetch from "hooks/useFetch";

export default function Admin() {
  // Global state
  const { dispatchTitles } = useTitles();
  const titles = useFetch("title_test", dispatchTitles);

  //Local states
  const [selection, setSelection] = useState("edit");

  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <main className="page-admin">
          <Sorter hook={[selection, setSelection]} />
          {selection === "create" && <CreateForm />}
          {selection === "edit" && <EditForm data={titles.data} />}
        </main>
      )}
    </>
  );
}
