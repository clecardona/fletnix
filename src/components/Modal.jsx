//NPM Packages
import reactDom from "react-dom";
import { useState, FC } from "react";

//Local Files
import cross from "assets/icns/cross.png";
import Episodes from "./Episodes";
import Sorter from "./Sorter";
import Lister from "./Lister";
import PlayerControlled from "./PlayerControlled";

interface IProps {
  isOpen: boolean;
  onClose(): void;
  element: object;
}

export default function Modal({ isOpen, onClose, element }) {
  const [seasonId, setSeasonId] = useState(1);
  const [video, setVideo] = useState(element.trailer);
  const [titleVisibility, setTitleVisibility] = useState(true);

  const mockMatch = Math.floor(Math.random() * (100 - 80) + 80);
  console.log(onClose);

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
          />
          {/* <div className="gradient" /> disabled : hides the Youtube controls */}
          {titleVisibility && (
            <div className="bloc">
              {element.logo_url && (
                <img
                  src={element.logo_url}
                  alt=""
                  className="title-illustration"
                />
              )}
              <h1>{element.title}</h1>
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

          {element.seasons && element.category === "serie" && (
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
