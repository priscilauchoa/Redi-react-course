import ReactPlayer from "react-player/youtube";

export default function YoutubePlayer({ url }) {
  return <ReactPlayer width="199px" height="150px" url={url} />;
}
