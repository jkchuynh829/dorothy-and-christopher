import { Parallax } from 'react-scroll-parallax';
import Image, { StaticImageData } from 'next/image';
import tw, { styled } from 'twin.macro';
import { Paragraph as P } from './Typography';

const Mobile = tw.div`hidden md:block`;

interface ImageContainerProps {
  landscape?: boolean;
}

const ImageContainer = styled.div<ImageContainerProps>`
  ${tw`relative flex-1 w-full rounded-3xl md:rounded-sm overflow-hidden pt-140 md:mb-3 md:pt-80`}
  ${({ landscape = false }) => landscape && tw`pt-96`}
`;

interface ContainerProps {
  format: 'image-left' | 'image-right';
}

const Container = styled.section<ContainerProps>`
  ${tw`
    relative flex justify-center items-center
    border-0 border-solid
    mb-0 md:mb-0
    p-12 md:p-0
    min-h-160 md:min-h-0
  `}
  ${({ format }) =>
    ({
      'image-left': tw`flex-row border-light-gray border-t border-l md:border-0`,
      'image-right': tw`flex-row-reverse border-dark-gray border-t border-r md:border-0`,
    }[format])}
`;

const StyledParallax = styled(Parallax)`
  ${tw`flex-1 h-full w-full md:hidden`}
`;

const ContentContainer = styled.div`
  ${tw`w-full h-full flex items-center justify-center flex-1 z-10`}
`;

const Paragraph = styled(P)`
  ${tw`text-xl leading-8 md:text-base md:mb-6`}
`;

const textParallaxValues = {
  'image-left': {
    x: [-35, 0],
    y: [-25, 0],
  },
  'image-right': {
    x: [35, 0],
    y: [25, 0],
  },
};

const imageParallaxValues = {
  'image-left': {
    x: [-50, 0],
    y: [0, 0],
  },
  'image-right': {
    x: [50, 0],
    y: [0, 0],
  },
};

const Gutter = tw.div`w-12 md:hidden`;

interface StorySectionBaseProps {
  image?: StaticImageData;
  format: 'image-left' | 'image-right';
  landscape?: boolean;
  objectFit?: any;
}

type StorySectionProps = React.PropsWithChildren<StorySectionBaseProps>;

const StorySection = ({
  image,
  format,
  landscape = false,
  objectFit = 'cover',
  children,
}: StorySectionProps) => {
  return (
    <Container format={format}>
      {image && (
        <StyledParallax
          x={imageParallaxValues[format].x}
          y={imageParallaxValues[format].y}
        >
          <ImageContainer landscape={landscape}>
            <Image src={image} layout="fill" objectFit={objectFit} />
          </ImageContainer>
        </StyledParallax>
      )}
      <Gutter />
      <ContentContainer>
        <StyledParallax
          x={textParallaxValues[format].x}
          y={textParallaxValues[format].y}
        >
          <Paragraph>{children}</Paragraph>
        </StyledParallax>
      </ContentContainer>
      <Mobile>
        {image && (
          <ImageContainer>
            <Image src={image} layout="fill" objectFit={objectFit} />
          </ImageContainer>
        )}
        <Paragraph>{children}</Paragraph>
      </Mobile>
    </Container>
  );
};

export default StorySection;
