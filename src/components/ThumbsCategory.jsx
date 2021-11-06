//Local Files
import ThumbsItem from "./ThumbsItem";

export default function ThumbsCategory({ data, children }) {
  const Thumbnails = data.map((item, index) => (
    <ThumbsItem key={index} item={item} index={index} />
  ));

  return (
    <>
      <section className="category-thumbs">
        <h2 className="title"> {children}</h2>
        <ul className="track">{Thumbnails}</ul>
      </section>
    </>
  );
}
