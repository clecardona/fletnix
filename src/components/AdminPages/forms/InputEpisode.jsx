//NPM Packages
import { useState } from "react";

//Local Files
import remove from "assets/icns/remove.png";

export default function InputEpisode({ state, setForm }) {
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState({});
  //methods
  function onChangeLink(value, index) {
    // const newSeason = [...state.links];
    //newSeason[index] = value;
    //setForm({ ...state, links: newLinks });
  }
  console.log(state.seasons[season]);
  function addEpisode() {
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

  const Episodes = episodes.map((item, index) => (
    <li key={index} className="list-item">
      <button
        className="btn btn-orange"
        type="button"
        onClick={() => setEpisode(item)}
      >
        Select
      </button>
      <p>Episode {index + 1}</p>
    </li>
  ));

  return (
    <>
      <div className="seasons">
        <h2>Seasons : </h2>
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
        {season !== "" && state.seasons[season].episodes && (
          <>
            <ul>{Episodes}</ul>
            <button
              className="btn btn-add-field"
              onClick={addEpisode}
              type="button"
            >
              <h4> Add episode </h4>
            </button>
          </>
        )}
      </div>

      <div className="episode">
        <h2>Episode:</h2>
        <p>{episode.number}</p>
        <p>{episode.description}</p>
        <p>{episode.thumbnail_url}</p>
      </div>
    </>
  );
}
