import loupe from "assets/img/loupe.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  return (
    <div className={isOpen ? "searchbar-open" : "searchbar"}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={loupe} alt="" />
      </button>
      {isOpen && (
        <input
          type="text"
          placeholder="Titles"
          onChange={(e) => {
            history.push(`/search/${e.target.value}`);
          }}
        />
      )}
    </div>
  );
}
