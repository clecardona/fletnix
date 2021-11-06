//NPM Packages
import { useState } from "react";

//Local Files
import Modal from "components/Modal";
import { fixBG, unfixBG } from "scripts/modal";

export default function ThumbsItem({ item, index }) {
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
    <li className="track-item" key={index}>
      <button onClick={openModal}>
        <img src={item.image_url} alt="" />
        <h3>{item.title}</h3>
      </button>
      <Modal element={item} isOpen={isModalOpen} onClose={closeModal} />
    </li>
  );
}
