import React from "react";

export default function Thumbs10() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Thumbnails = array.map((item, index) => {
    const imgPath = require("assets/icns/numbers/" + item + ".svg");
    return (
      <li key={index}>
        <img src={imgPath.default} alt="" className="rank" />
        <img
          className="thumb"
          src="https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ="
          alt=""
        />
      </li>
    );
  });

  return (
    <section className="home-thumbs home-thumbs-10">
      <h2 className="title"> Top 10 in Sweden Today</h2>
      <ul className="track">{Thumbnails}</ul>
    </section>
  );
}
