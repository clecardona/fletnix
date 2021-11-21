//NPM Packages
import { FC } from "react";

//Local Files
import Thumbs10Item from "./Thumbs10Item";
import iTitle from "types/iTitle";

interface IProps {
  data: iTitle[];
}

// This does not take points, but this should be "Cards". By deficnition a card is a "visually enhanced button" its clickanle like a button but has a lot of visual information instead of a single label or label + icon.
// The thumb is just the image element that usually is predominant but not the only thing in the card.
const Thumbs10: FC<IProps> = ({ data }) => {
  const Thumbnails = data.map((item, index) => {
    const imgName = index + 1;
    const imgPath = require("assets/icns/numbers/" + imgName + ".svg");
    return <Thumbs10Item key={index} item={item} imgPath={imgPath} />;
  });

  return (
    <section className="home-thumbs home-thumbs-10">
      <h2 className="title"> Top 10 in Sweden Today</h2>
      <ul className="track">{Thumbnails}</ul>
    </section>
  );
};
export default Thumbs10;
