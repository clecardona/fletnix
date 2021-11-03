import React from "react";

export default function Episodes({ data, season, setVideo }) {
  const mockURL =
    "https://assets.upflix.pl/media/n/1619/2021/1uoksv2f1ocizt8xewywz27nqsr__1200_1600_r.jpg";

  const episodes = data[season - 1].episodes;

  const Episodes = episodes.map((item, index) => (
    <button
      key={index}
      className="episode"
      onClick={() => setVideo(item.video_url)}
    >
      <h1>{item.number}</h1>
      <div className="thumb">
        <img src={item.thumbnail_url} alt="" />
        <div className="bar" style={{ width: `${item.progress}%` }} />
      </div>

      <div className="title">
        <h2>Episode {item.number}</h2>
        <h2>{item.duration}</h2>
      </div>
      <p className="description">{item.description}</p>
    </button>
  ));
  return <section className="episodes">{Episodes}</section>;
}
