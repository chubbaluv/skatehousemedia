'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { IntroParagraph, LogoWrapper, PageWrapper, TipMe } from './home-styled';
import { Headline } from '#/components/Typography/Typography';
import { baseColors, basePadding, transition } from '#/theme';
import { ShmLogo, VenomLogo } from '#/components/enhancedSvg/svgs';

const NavigationItem = styled(Headline)`
  color: ${baseColors.white};
  border-bottom: 5px solid ${baseColors.white};
  margin: ${basePadding.large} 0 0 0;
  transition: ${transition.default};

  &:hover {
    color: ${baseColors.gray4};
    border-bottom: 5px solid ${baseColors.gray4};
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
      <IntroParagraph textAlignment='center' variant='6'>
        {`This months site fees are paid for by:`}
      </IntroParagraph>
      <LogoWrapper as='a' href='http://venomskate.com/'>
        <VenomLogo customWidth={300} />
      </LogoWrapper>
      <TipMe italic={true} textAlignment='center' variant='6'>
        {`Howdy y'all. We're bringing it back (kind of). We're standing up the archive of all of the preserved SkateHouseMedia in the most cost effective way possible (pray for us). Right now "we" is just one person, so bear with me as I process all of these old videos. Once I've finished standing up the archive (I'm about an 1/8th of the way done) I plan on adding some additional features like search, shuffle, and taxonomies for filtering. Thanks for the patience. (And if you want to buy ne coffee for doing this, my venmo is @chubbaluv)`}
      </TipMe>
    </PageWrapper>
  )
}
