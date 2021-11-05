//NPM Packages
import { useState } from "react";

//Local Files
import Modal from "components/Modal";

export default function Thumbs10Item({ item, index, imgPath }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className="track-item" key={index}>
      <button onClick={() => setIsModalOpen(true)}>
        <img src={imgPath.default} alt="" className="rank" />
        <div className="wrapper">
          <h3>{item.title}</h3>
          <img className="thumb" src={item.image_url} alt="" />
        </div>
      </button>
      <Modal
        element={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </li>
  );
}
