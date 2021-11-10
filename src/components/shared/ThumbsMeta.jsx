export default function ThumbsMeta({ element }) {
  const mockMatch = Math.floor(Math.random() * (100 - 80) + 80);
  return (
    <section className="thumbs-meta">
      <div className="details">
        <p className="match">{mockMatch}% Match</p>
        <p className="public">
          {element.advised_public ? element.advised_public : "13+"}
        </p>
        <p className="duration">{element.duration}</p>
      </div>
    </section>
  );
}
