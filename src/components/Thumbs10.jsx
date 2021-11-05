//Local Files
import Thumbs10Item from "./Thumbs10Item";

export default function Thumbs10({ data }) {
  const Thumbnails = data.map((item, index) => {
    const imgName = index + 1;
    const imgPath = require("assets/icns/numbers/" + imgName + ".svg");
    return <Thumbs10Item item={item} index={index} imgPath={imgPath} />;
  });

  return (
    <section className="home-thumbs home-thumbs-10">
      <h2 className="title"> Top 10 in Sweden Today</h2>
      <ul className="track">{Thumbnails}</ul>
    </section>
  );
}
