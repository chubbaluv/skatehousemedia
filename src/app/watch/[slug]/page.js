import VideoPage from "#/components/VideoPage";
import videos from "../../../../data/videoData"

export async function generateStaticParams() {
  // const videos = await fetch('https://.../videos').then((res) => res.json())
  return videos;
}

const Watch = ({ params }) => {
  const { slug } = params;
  const video = videos.find(item => item.slug === slug);

  return (
    <VideoPage video={video} />
  );
}

export default Watch;