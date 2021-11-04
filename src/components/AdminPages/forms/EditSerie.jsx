//NPM Packages
import { useState } from "react";

//Local Files
import EpisodesList from "./EpisodesList";
import EditEpisode from "./EditEpisode";

export default function EditSerie({ state, setForm }) {
  const emptyEpisode = {
    description: "",
    video_url: "",
    duration: "",
    thumbnail_url: "",
  };

  const [seasonId, setSeasonId] = useState(0);
  const [episodeId, setEpisodeId] = useState(0);
  //console.log(episodeId);
  //const [episodeId, setEpisodeId] = useState("");
  //const [episodes, setEpisodes] = useState([]);
  //const [episode, setEpisode] = useState(emptyEpisode);

  //methods

  function addEpisode(idx) {
    //const newSeason = [...state.seasons];
    //const newEpisodes = newSeason[idx];
    //newEpisodes.episodes.push(emptyEpisode);
    //newSeason[idx] = newEpisodes;
    //setEpisode(emptyEpisode);
    //setForm({ ...state, seasons: newSeason });
  }

  function deleteEpisode(idx) {
    //const newSeason = [...state.seasons];
    //const newEpisodes = newSeason[idx].episodes;
    //console.log(newEpisodes, idx);
    //newEpisodes.splice(idx, 1);
    /*   const otherEpisodes = newEpisodes.filter(( index) => {
      return index !== idx;
    }); */
    //console.log(otherEpisodes);
    //console.log(newEpisodes);
    //newSeason[idx] = otherEpisodes;
    //setEpisodes(otherEpisodes);
    //setForm({ ...state, seasons: newSeason });
  }

  // Methods

  //console.log(episode);

  function onChange(key, value) {
    //const field = { [key]: value };
    //const upEpisode = { ...episode, ...field };
    //console.log(typeof upEpisode.number, upEpisode.number);
    //setEpisode(upEpisode);
    //todo - propagate to form
    //const newSeasons = [...state.seasons];
    //const newEpisodes = [...newSeasons[seasonId].episodes];
    //console.log(newEpisodes /* [0].duration */);
    //const episodeId = Number.parseInt(upEpisode.number) - 1;
    //newEpisodes[episodeId] = upEpisode;
    //newSeasons[seasonId] = newEpisodes;
    //setForm({ ...state, seasons: newSeasons });
    //newSeasons[season] =
    // const newSeason = [...state.links];
    //newSeason[index] = value;
    //setForm({ ...state, links: newLinks });;
  }

  //Component

  const Options = state.seasons.map((item, index) => (
    <option key={index} value={index}>
      Season {index + 1}
    </option>
  ));

  //console.log("S", seasonId, "EP", episodeId, state.seasons[0].episodes[0]);

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
                //setEpisodes(state.seasons[e.target.value].episodes);
              }
            }}
          >
            <option value="">-</option>
            {Options}
          </select>
        </label>
        {seasonId !== "" && state.seasons[seasonId].episodes && (
          <>
            <EpisodesList
              data={state.seasons[seasonId].episodes}
              setEpisodeId={setEpisodeId}
            />
            <button
              className="btn btn-add-field"
              // onClick={() => addEpisode(seasonId)}
              type="button"
            >
              <h4> Add episode </h4>
            </button>
          </>
        )}
      </div>

      <EditEpisode
        data={state.seasons[seasonId].episodes[episodeId]}
        episodeId={episodeId}
        seasonId={seasonId}
        state={state}
        setForm={setForm}
      />
    </>
  );
}
