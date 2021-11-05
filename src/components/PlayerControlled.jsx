//NPM Packages
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

//Local Files
export default function PlayerControlled({ video, onPlay, onPause, autoplay }) {
  const videoId = getYouTubeID(video);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: autoplay,
    },
  };

  return (
    <div className="video-container">
      <YouTube
        videoId={videoId}
        opts={opts}
        onPlay={onPlay}
        onPause={onPause}
      />
    </div>
  );
}
