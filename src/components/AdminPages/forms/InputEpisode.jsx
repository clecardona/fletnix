//NPM Packages
import { useState } from "react";

//Local Files
import remove from "assets/icns/remove.png";
import fields from "components/AdminPages/assets/fields-episode.json";
import InputField from "components/shared/InputField";
import Player from "components/Player";

export default function InputEpisode({ state, setForm }) {
  const emptyEpisode = {
    description: "",
    video_url: "",
    duration: "",
    thumbnail_url: "",
  };
  const [seasonId, setSeasonId] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState(emptyEpisode);
  //methods
  function onChangeLink(value, index) {
    // const newSeason = [...state.links];
    //newSeason[index] = value;
    //setForm({ ...state, links: newLinks });
  }
  console.log(state.seasons[seasonId]);
  console.log("episode :", episode);

  function addEpisode(idx) {
    const newSeason = [...state.seasons];
    const newEpisodes = newSeason[idx];
    newEpisodes.episodes.push(emptyEpisode);
    newSeason[idx] = newEpisodes;
    setEpisode(emptyEpisode);
    setForm({ ...state, seasons: newSeason });
  }

  function clearField(idx) {
    const newSeason = [...state.seasons];
    newSeason.splice(idx, 1);
    //setForm({ ...state, seasons: newSeason });
  }

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setEpisode({ ...episode, ...field });
  }

  //Component

  const Options = state.seasons.map((item, index) => (
    <option key={index} value={index}>
      Season {index + 1}
    </option>
  ));

  const Episodes = episodes.map((item, index) => (
    <li key={index}>
      <button
        className="btn-select"
        type="button"
        onClick={() => setEpisode(item)}
      >
        Episode {index + 1}
      </button>
    </li>
  ));

  const EpisodeFields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={episode[item.key]}
      onChange={onChange}
    />
  ));
  //console.log(episode);
  return (
    <>
      <div className="seasons">
        <h2>Seasons : </h2>
        <label className="selector">
          Select a season :
          <select
            onChange={(e) => {
              setSeasonId(e.target.value);
              if (e.target.value) {
                setEpisodes(state.seasons[e.target.value].episodes);
              }
            }}
          >
            <option value="">-</option>
            {Options}
          </select>
        </label>
        {seasonId !== "" && state.seasons[seasonId].episodes && (
          <>
            <ul>{Episodes}</ul>
            <button
              className="btn btn-add-field"
              onClick={() => addEpisode(seasonId)}
              type="button"
            >
              <h4> Add episode </h4>
            </button>
          </>
        )}
      </div>

      <div className="episode">
        <h2>Episode {episode.number} :</h2>
        {episode.video_url && <Player video={episode.video_url} />}
        <ul>{EpisodeFields}</ul>
      </div>
    </>
  );
}
