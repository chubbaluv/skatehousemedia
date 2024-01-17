'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { PageWrapper, LogoWrapper } from './home-styled';
import { Headline } from '#/components/Typography/Typography';
import { baseColors, basePadding, transition } from '#/theme';
import { ShmLogo } from '#/components/enhancedSvg/svgs';

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
        <ShmLogo customWidth={500} />
      </LogoWrapper>
      <Headline margin='50px 0 0 0' variant='4'>Coming Soon</Headline>
      {/* <Link href='/archive'>
        <NavigationItem variant='4'>The Archive</NavigationItem>
      </Link>
      <Link href='/shuffle'>
        <NavigationItem variant='4'>Shuffle</NavigationItem>
      </Link> */}
    </PageWrapper>
  )
}
