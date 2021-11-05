//NPM Packages
import { useState } from "react";

//Local Files
import Modal from "components/Modal";

export default function Thumbs10({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Thumbnails = data.map((item, index) => {
    const imgName = index + 1;
    const imgPath = require("assets/icns/numbers/" + imgName + ".svg");
    return (
      <li key={index}>
        <button onClick={() => setIsModalOpen(true)}>
          <img src={imgPath.default} alt="" className="rank" />
          <h3>{item.title}</h3>
          <img className="thumb" src={item.image_url} alt="" />
        </button>
        <Modal
          element={item}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          New course
        </Modal>
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
