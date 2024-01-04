import Link from 'next/link';
import { PageWrapper, LogoWrapper } from './page-styled';

export default function Home() {
  return (
    <PageWrapper>
      <Link href='/watch/test-video'>
        Test Link
      </Link>
      <LogoWrapper>
        <img
          src="/SkatehouseLogo3000x2500.jpeg"
          alt="SHM Logo"
          width={300}
          height={250}
        />
      </LogoWrapper>
    </PageWrapper>
  )
}
