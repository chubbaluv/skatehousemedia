'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { PageWrapper, LogoWrapper } from './home-styled';
import { Headline } from '#/components/Typography/Typography';
import { baseColors, basePadding, transition } from '#/theme';

const NavigationItem = styled(Headline)`
  border-bottom: 5px solid transparent;
  margin: ${basePadding.large} 0 0 0;
  transition: ${transition.default};

  &:hover {
    border-bottom: 5px solid ${baseColors.white};
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <LogoWrapper>
        <img
          src="/SkatehouseLogo3000x2500.jpeg"
          alt="SHM Logo"
          width={300}
          height={250}
        />
      </LogoWrapper>
      <Link href='/archive'>
        <NavigationItem variant='4'>The Archive</NavigationItem>
      </Link>
      <Link href='/watch/test-video-2'>
        <NavigationItem variant='4'>Shuffle</NavigationItem>
      </Link>
    </PageWrapper>
  )
}
