import React from "react";

export default function EpisodesList({ data, setEpisodeId, removeEpisode }) {
  //console.log(data);

  const Episodes = data.map((item, index) => (
    <li key={index}>
      <button
        className="btn-select"
        type="button"
        onClick={() => setEpisodeId(index)}
      >
        Episode {index + 1}
      </button>
      <button
        className="btn-delete"
        type="button"
        onClick={() => removeEpisode(index)}
      >
        x
      </button>
    </li>
  ));
  return <ul>{Episodes}</ul>;
}
