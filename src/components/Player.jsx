//NPM Packages
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

//Local Files
import { useState } from "react";

export default function Player({ initialVideo }) {
  const [video, setVideo] = useState(initialVideo);

  return (
    <div className="container">
      <iframe
        //src={
        //`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&showinfo=0&controls=0` /* ?autoplay=1&mute=1&showinfo=0&controls=0 */
        //}
        src={
          `https://www.youtube.com/embed/${video}` /* ?autoplay=1&mute=1&showinfo=0&controls=0 */
        }
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </div>
  );
}
