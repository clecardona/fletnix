import video from "assets/video/bg.mp4";

export default function VideoBG() {
  return (
    <video autoPlay muted loop playsInline className="bg">
      <source src={video} type="video/mp4" />
    </video>
  );
}
