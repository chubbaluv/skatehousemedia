import videos from "../../../../data/mockdata"

export async function generateStaticParams() {
  // const videos = await fetch('https://.../videos').then((res) => res.json())
  return videos;
}

const VideoPage = ({ params }) => {
  const { slug } = params;

  return (
    <h1>
      {slug}
    </h1>
  );
}



export default VideoPage;