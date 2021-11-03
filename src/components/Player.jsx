//NPM Packages
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

//Local Files
import { useState } from "react";

export default function Player({ video }) {
  const videoId = getYouTubeID(video);

  return (
    <div className="video-container">
      <iframe
        //src={
        //`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&showinfo=0&controls=0` /* ?autoplay=1&mute=1&showinfo=0&controls=0 */
        //}
        src={
          `https://www.youtube.com/embed/${videoId}?` /* ?autoplay=1&mute=1&showinfo=0&controls=0 */
        }
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </div>
  );
}
