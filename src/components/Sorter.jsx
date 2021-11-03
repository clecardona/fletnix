import { useState } from "react";
import droparrow from "assets/icns/droparrow.svg";

export default function Sorter({ data, hook }) {
  const [season, setSeason] = hook;
  const [isOpen, setIsOpen] = useState(false);

  const ListItems = data.map((item, index) => (
    <li key={index}>
      <button
        onClick={() => {
          setSeason(index + 1);
          setIsOpen(!isOpen);
        }}
      >
        Season {index + 1}
        <em> ({item.episodes.length} Episodes)</em>
      </button>
    </li>
  ));

  return (
    <section className="sorter">
      <h3>Episodes</h3>
      <button className="btn-season" onClick={() => setIsOpen(!isOpen)}>
        Season {season} <img src={droparrow} alt="" />
      </button>
      {isOpen && <ul className="caret">{ListItems}</ul>}
    </section>
  );
}
