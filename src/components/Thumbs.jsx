import React from "react";

export default function Thumbs({ children }) {
  const array = [0, 0, 0, 0, 0, 0, 0, 0];

  const Thumbnails = array.map((item, index) => (
    <li key={index}>
      <img
        src="https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ="
        alt=""
      />
    </li>
  ));
  return (
    <section className="home-thumbs">
      <h2 className="title"> {children}</h2>
      <ul>{Thumbnails}</ul>
    </section>
  );
}
