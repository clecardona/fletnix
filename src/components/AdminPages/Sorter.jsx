import SortButton from "components/AdminPages/SortButton";

export default function Sorter({ hook }) {
  return (
    <section className="sorter">
      <SortButton target="create" hook={hook}>
        Create Title
      </SortButton>

      <SortButton target="edit" hook={hook}>
        Edit Title
      </SortButton>
    </section>
  );
}
