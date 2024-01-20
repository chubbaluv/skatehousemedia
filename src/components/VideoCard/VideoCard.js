import Link from "next/link";
import { CardWrapper, ImageWrapper, TitleWrapper } from "./VideoCardStyled";
import { Subhead } from "../Typography/Typography";

const VideoCard = ({ slug, thumbnail, title }) => {

  return (
    <Link href={`watch/${slug}`}>
      <CardWrapper>
        <ImageWrapper>
          <img alt={title} loading="lazy" src={thumbnail} />
        </ImageWrapper>
        <TitleWrapper>
          <Subhead variant='3'>
            {title}
          </Subhead>
        </TitleWrapper>
      </CardWrapper>
    </Link>
  );
};

export default VideoCard;