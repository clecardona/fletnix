//NPM Packages
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

//Local Files
export default function PlayerControlled({ video, onPlay, onPause, autoplay }) {
  const videoId = getYouTubeID(video);

  return (
    <div className="video-container">
      <YouTube
        videoId={videoId}
        //opts={opts}
        //autoplay={1}
        onPlay={onPlay}
        onPause={onPause}
      />
    </div>
  );
}
