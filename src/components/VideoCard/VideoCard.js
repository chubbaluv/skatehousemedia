import Link from "next/link";
import { CardWrapper, Thumbnail, TitleWrapper } from "./VideoCardStyled";
import { Subhead } from "../Typography/Typography";

const VideoCard = ({ slug, thumbnail, title }) => {

  return (
    <Link href={`watch/${slug}`}>
      <CardWrapper>
        <Thumbnail $backgroundImage={thumbnail} />
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