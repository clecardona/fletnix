//NPM Packages
import { useState } from "react";

import play from "assets/icns/play.png";
import info from "assets/icns/info.png";
import Modal from "components/Modal/Modal";
import { fixBG, unfixBG } from "scripts/modal";

export default function Hero({ data }) {
  //Local states
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
    <>
      <Modal element={data} isOpen={isModalOpen} onClose={closeModal} />

      <section className="bloc-title">
        {data.logo_url ? (
          <img src={data.logo_url} alt="" className="title-illustration" />
        ) : (
          <h1>{data.title}</h1>
        )}

        <h2>{data.description}</h2>
        <div className="buttons">
          <button className="btn-play" onClick={openModal}>
            <img src={play} alt="" /> Play
          </button>
          <button className="btn-more-info" onClick={openModal}>
            <img src={info} alt="" />
            More Info
          </button>
        </div>
      </section>
      <section className="hero"></section>
    </>
  );
}
