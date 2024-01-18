'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { LogoWrapper, PageWrapper, TipMe } from './home-styled';
import { Headline, BodyText } from '#/components/Typography/Typography';
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
      <Link href='/archive'>
        <NavigationItem variant='4'>The Archive</NavigationItem>
      </Link>
      {/* <Link href='/shuffle'>
        <NavigationItem variant='4'>Shuffle</NavigationItem>
      </Link> */}
      <TipMe textAlignment='center' variant='6'>
        Just a friendly reminder that every time you watch a video here, my credit card is getting charged some amount of money. Not to mention the time sink... If you feel so inclined, consider buying me a coffee. My venmo is @chubbaluv
      </TipMe>
    </PageWrapper>
  )
}
