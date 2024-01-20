import Link from "next/link";
import { Card, CardWrapper, ImageWrapper, TitleWrapper } from "./VideoCardStyled";
import { Subhead } from "../Typography/Typography";

const VideoCard = ({ slug, thumbnail, title }) => {

  return (
    <CardWrapper>
      <Link href={`watch/${slug}`}>
        <Card>
          <ImageWrapper>
            <img alt={title} loading="lazy" src={thumbnail} />
          </ImageWrapper>
          <TitleWrapper>
            <Subhead variant='3'>
              {title}
            </Subhead>
          </TitleWrapper>
        </Card>
      </Link>
    </CardWrapper>
  );
};

export default VideoCard;