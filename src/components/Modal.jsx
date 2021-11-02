//NPM Packages
import reactDom from "react-dom";
import { useState } from "react";

//Local Files
import cross from "assets/icns/cross.png";
import play from "assets/icns/play.png";
import droparrow from "assets/icns/droparrow.svg";
import Episodes from "./Episodes";

export default function Modal({ isOpen, onClose, data, children, type }) {
  const [season, setSeason] = useState(1);

  const mockURL =
    "https://assets.upflix.pl/media/n/1619/2021/1uoksv2f1ocizt8xewywz27nqsr__1200_1600_r.jpg";
  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={cross} />
        </button>

        <div className="illustration">
          <img src={mockURL} alt="" />
          <div className="gradient" />

          <div className="bloc">
            <h1>The Office</h1>
            <div className="buttons">
              <button className="btn-play">
                <img src={play} alt="" /> Play
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="meta">
            <div className="details">98% Match 2017 16+ 4 seasons</div>

            <p className="description">
              A mockumentary on a group of typical office workers, where the
              workday consists of ego clashes, inappropriate behavior, and
              tedium.
            </p>

            <p className="cast">
              <em>Cast:</em> Actor 1, Actor 2 ,...
            </p>
            <p className="genres">
              <em>Genres:</em> Genre 1, Genre 2 ,...
            </p>
            <p className="tags">
              <em>This programme is:</em> tag 1, tag 2 ,...
            </p>
          </section>

          <section className="sorter">
            <h3>Episodes</h3>
            <button className="btn-season">
              Season 3 <img src={droparrow} alt="" />
            </button>
          </section>

          <Episodes />
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
