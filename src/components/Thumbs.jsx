//NPM Packages
import { useState } from "react";

//Local Files
import Modal from "components/Modal";

export default function Thumbs({ data, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Thumbnails = data.map((item, index) => (
    <li className="track-item" key={index}>
      <button onClick={() => setIsModalOpen(true)}>
        <img src={item.image_url} alt="" />
      </button>
      <Modal
        element={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        New course
      </Modal>
    </li>
  ));
  return (
    <>
      <section className="home-thumbs">
        <h2 className="title"> {children}</h2>
        <ul className="track">{Thumbnails}</ul>
      </section>
    </>
  );
}
