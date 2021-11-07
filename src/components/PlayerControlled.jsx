//NPM Packages
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

//Local Files
export default function PlayerControlled({ video, onPlay, onPause }) {
  const videoId = getYouTubeID(video);

  return (
    <div className="video-container">
      <YouTube videoId={videoId} onPlay={onPlay} onPause={onPause} />
    </div>
  );
}
