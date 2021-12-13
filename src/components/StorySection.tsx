import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { Paragraph as P } from './Typography';

interface ContainerProps {
  format: 'image-left' | 'image-right';
}

const Container = styled.section<ContainerProps>`
  ${tw`relative flex justify-center items-center mb-12 p-12 border-8 border-solid`}
  ${({ format }) =>
    ({
      'image-left': tw`flex-row border-green`,
      'image-right': tw`flex-row-reverse border-pink`,
    }[format])}
  min-height: 30rem;
`;

const StyledParallax = styled(Parallax)`
  ${tw`flex-1 h-full w-full`}
`;

const ImageContainer = styled.div`
  ${tw`relative flex-1`}
  padding-top: 30rem;
`;

const ContentContainer = styled.div`
  ${tw`w-full h-full flex items-center justify-center flex-1 z-10`}
`;

const Paragraph = styled(P)`
  ${tw`text-xl leading-8`}
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

const Gutter = tw.div`w-12`;

interface StorySectionBaseProps {
  image?: StaticImageData;
  format: 'image-left' | 'image-right';
}

type StorySectionProps = React.PropsWithChildren<StorySectionBaseProps>;

const StorySection = ({ image, format, children }: StorySectionProps) => {
  return (
    <Container format={format}>
      {image && (
        <StyledParallax
          x={imageParallaxValues[format].x}
          y={imageParallaxValues[format].y}
        >
          <ImageContainer>
            <Image src={image} layout="fill" objectFit="cover" />
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
    </Container>
  );
};

export default StorySection;
