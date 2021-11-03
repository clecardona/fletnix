//NPM Packages
import { useState } from "react";

//Local Files
import remove from "assets/icns/remove.png";

export default function InputEpisode({ state, setForm }) {
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  //methods
  function onChangeLink(value, index) {
    // const newSeason = [...state.links];
    //newSeason[index] = value;
    //setForm({ ...state, links: newLinks });
  }

  function addLink() {
    const newSeason = [...state.seasons];
    newSeason.push({ episodes: [{}] });
    setForm({ ...state, seasons: newSeason });
  }

  function clearField(idx) {
    const newSeason = [...state.seasons];
    newSeason.splice(idx, 1);
    setForm({ ...state, seasons: newSeason });
  }

  //Component

  const Options = state.seasons.map((item, index) => (
    <option key={index} value={index}>
      Season {index + 1}
    </option>
  ));

  console.log(episodes);
  const Episodes = episodes.map((item, index) => (
    <li key={index}>
      <button
        className="btn btn-orange"
        type="button"
        //onClick={() => handleClick(item)}
      >
        Select
      </button>
      <p>Episode {index + 1}</p>
    </li>
  ));

  return (
    <div className="seasons">
      <label className="selector">
        Select a season : {season}
        <select
          onChange={(e) => {
            setSeason(e.target.value);
            setEpisodes(state.seasons[e.target.value].episodes);
          }}
        >
          {Options}
        </select>
      </label>
      {season !== "" && state.seasons[season].episodes && <ul>{Episodes}</ul>}
      {/*  <h4>Seasons : </h4>
      {Seasons}
      {state.seasons.length < 20 && (
        <button className="btn btn-add-field" onClick={addLink} type="button">
          <h4> Add a season </h4>
        </button>
      )} */}
    </div>
  );
}
