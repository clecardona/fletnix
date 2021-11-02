import React from "react";

export default function Episodes() {
  const mockURL =
    "https://assets.upflix.pl/media/n/1619/2021/1uoksv2f1ocizt8xewywz27nqsr__1200_1600_r.jpg";
  const array = [1, 2, 3, 4, 5];

  const Episodes = array.map((item, index) => (
    <article key={index} className={item === 3 ? "active" : ""}>
      <h1>{item}</h1>
      <img src={mockURL} alt="" />
      <div className="title">
        <h2>Episode {item}</h2>
        <h2>58m</h2>
      </div>
      <p className="description">
        Andy maneuvers to be Michael's second in command and irritates everyone,
        especially Jim. The thirdparty-planning commitee prepares for Oscar's
        return.
      </p>
    </article>
  ));
  return <section className="episodes">{Episodes}</section>;
}
