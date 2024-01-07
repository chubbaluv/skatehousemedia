'use client'
import { useRouter } from "next/navigation";
import { BackButtonWrapper, VideoWrapper } from "./VideoPageStyled";
import { Subhead } from "#/components/Typography/Typography";

const VideoPage = ({ slug }) => {
  const router = useRouter();
  const goBackLabel = '< Go Back';
  const mockUrl = 'https://rr1---sn-a5mekn6d.c.drive.google.com/videoplayback?expire=1704624325&ei=lVaaZZLJCd3lzN0P6ZGxgAg&ip=2600:1700:b770:783f:906:bd9f:99b1:afbd&id=ad145a3f4cae1917&itag=18&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=_h&mm=32&mn=sn-a5mekn6d&ms=su&mv=u&mvi=1&pl=44&ttl=transient&susc=dr&driveid=1l4299Zp_5BsjDe3_xt_ImOOnbh7SDyeI&app=explorer&eaua=rbtpvI8GoUg&mime=video/mp4&vprv=1&prv=1&dur=104.838&lmt=1570430784425546&mt=1704611651&subapp=DRIVE_WEB_FILE_VIEWER&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAMlR5hjDbCy_IcvMVmDTBUfLgdM37bX42JxzNwEJ85ONAiAfT_7xXLCVzo2aAdQr_Vtv3MdPb8s0LfACffyz-26wqw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgeeKKreBEM2msNhQVQWKwlqcsQrMh8vuDhOWYfMffr1ACIQDRtiQZc-QQmKykG2R3EpfrN4ytKfBNBWEjG8Wl8T3-kQ==&cpn=rruMNy0wb5-eRFGE&c=WEB_EMBEDDED_PLAYER&cver=1.20240102.01.00';

  return (
    <>
      <BackButtonWrapper>
        <button type='button' onClick={() => router.back()}>
          <Subhead variant='3'>{goBackLabel}</Subhead>
        </button>
      </BackButtonWrapper>
      <VideoWrapper>
        <video
          controls
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          src={mockUrl}
          type='video/mp4'
        >
          {/* <source controls src={mockUrl} type='video/mp4' /> */}
        </video>
      </VideoWrapper>

    </>

  );
};

export default VideoPage;