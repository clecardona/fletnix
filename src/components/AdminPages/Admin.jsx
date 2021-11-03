//NPM PAckages
import { useState } from "react";

//Local imports
import { useAuth } from "state/AuthProvider";
import Sorter from "components/AdminPages/Sorter";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import { useTitles } from "state/TitlesProvider";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import useFetch from "hooks/useFetch";

export default function Admin() {
  // Global state
  const { dispatchTitles } = useTitles();
  const titles = useFetch("titles", dispatchTitles);

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
