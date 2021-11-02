//NPM Packages
import reactDom from "react-dom";

//Local Files
import cross from "assets/icns/cross.png";

export default function Modal({ isOpen, onClose, data, children, type }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={cross} />
        </button>

        <div className="container">Content</div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
