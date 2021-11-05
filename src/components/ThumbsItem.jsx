//NPM Packages
import { useState } from "react";

//Local Files
import Modal from "components/Modal";

export default function ThumbsItem({ item, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className="track-item" key={index}>
      <button onClick={() => setIsModalOpen(true)}>
        <img src={item.image_url} alt="" />
        <h3>{item.title}</h3>
      </button>
      <Modal
        element={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </li>
  );
}
