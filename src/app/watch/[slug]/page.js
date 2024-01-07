import VideoPage from "#/components/VideoPage";
import videos from "../../../../data/mockdata"

export async function generateStaticParams() {
  // const videos = await fetch('https://.../videos').then((res) => res.json())
  return videos;
}

const WatchPage = ({ params }) => {
  const { slug } = params;

  return (
    <VideoPage slug={slug} />

  );
}

export default WatchPage;