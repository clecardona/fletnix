//Local Files
import ThumbsItem from "./ThumbsItem";

export default function Thumbs({ data, children }) {
  const Thumbnails = data.map((item, index) => (
    <ThumbsItem key={index} item={item} index={index} />
  ));

  return (
    <>
      <section className="home-thumbs">
        <h2 className="title"> {children}</h2>
        <ul className="track">{Thumbnails}</ul>
      </section>
    </>
  );
}
