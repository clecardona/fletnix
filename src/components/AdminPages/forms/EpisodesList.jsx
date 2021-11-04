import React from "react";

export default function EpisodesList({ data, setEpisodeId }) {
  //console.log(data);

  const Episodes = data.map((item, index) => (
    <li key={index}>
      <button
        className="btn-select"
        type="button"
        onClick={() => setEpisodeId(index)}
      >
        Episode {item.number}
      </button>
      <button
        className="btn-delete"
        type="button"
        //onClick={() => deleteEpisode(index)}
      >
        x
      </button>
    </li>
  ));
  return <ul>{Episodes}</ul>;
}
