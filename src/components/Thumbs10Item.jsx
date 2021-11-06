//NPM Packages
import { useState } from "react";

//Local Files
import Modal from "components/Modal";
import { fixBG, unfixBG } from "scripts/modal";

export default function Thumbs10Item({ item, index, imgPath }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
    fixBG();
  }

  function closeModal() {
    setIsModalOpen(false);
    unfixBG();
  }

  return (
    <li className="track-item">
      <button onClick={openModal}>
        <img src={imgPath.default} alt="" className="rank" />
        <div className="wrapper">
          <h3>{item.title}</h3>
          <img className="thumb" src={item.image_url} alt="" />
        </div>
      </button>
      <Modal element={item} isOpen={isModalOpen} onClose={closeModal} />
    </li>
  );
}
