//NPM Packages
import reactDom from "react-dom";
import { useState } from "react";

//Local Files
import cross from "assets/icns/cross.png";
import play from "assets/icns/play.png";
import Episodes from "./Episodes";
import Sorter from "./Sorter";
import Lister from "./Lister";
import Player from "./Player";

export default function Modal({ isOpen, onClose, element }) {
  const [seasonId, setSeasonId] = useState(1);
  const [video, setVideo] = useState(element.trailer);

  const mockMatch = Math.floor(Math.random() * (100 - 80) + 80);

  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={cross} />
        </button>

        <div className="illustration">
          <Player video={video} autoplay="0" controls="1" />
          {/* <div className="gradient" /> blocks the Youtube controls */}

          <div className="bloc">
            <h1>{element.title}</h1>
            <div className="buttons">
              <button className="btn-play">
                <img src={play} alt="" /> Play
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="meta">
            <div className="details">
              {mockMatch}% Match {element.year} {element.advised_public}{" "}
              {element.duration}
            </div>

            <p className="description">{element.description}</p>
            <Lister data={element.cast}>cast</Lister>
            <Lister data={element.genres}>genres</Lister>
            <Lister data={element.tags}>tags</Lister>
          </section>

          {element.seasons && (
            <>
              <Sorter data={element.seasons} hook={[seasonId, setSeasonId]} />
              <Episodes
                data={element.seasons}
                seasonId={seasonId}
                setVideo={setVideo}
              />
            </>
          )}
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
