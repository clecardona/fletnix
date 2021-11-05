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
import PlayerControlled from "./PlayerControlled";

export default function Modal({ isOpen, onClose, element }) {
  const [seasonId, setSeasonId] = useState(1);
  const [video, setVideo] = useState(element.trailer);
  const [titleVisibility, setTitleVisibility] = useState(true);
  const [playVideo, setPlayVideo] = useState(0);

  const mockMatch = Math.floor(Math.random() * (100 - 80) + 80);

  console.log(titleVisibility);

  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={cross} />
        </button>

        <div className="illustration">
          <PlayerControlled
            video={video}
            onPlay={() => setTitleVisibility(false)}
            onPause={() => setTitleVisibility(true)}
            autoplay={playVideo}
          />
          {/* <div className="gradient" /> blocks the Youtube controls */}
          {titleVisibility && (
            <div className="bloc">
              <h1>{element.title}</h1>
              <div className="buttons">
                <button className="btn-play">
                  <img src={play} alt="" onClick={() => setPlayVideo(1)} /> Play
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="container">
          <section className="meta">
            <div className="details">
              <p className="match">{mockMatch}% Match</p>
              <p className="year">{element.year}</p>
              <p className="public">
                {element.advised_public ? element.advised_public : "13+"}
              </p>
              <p className="duration">{element.duration}</p>
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
