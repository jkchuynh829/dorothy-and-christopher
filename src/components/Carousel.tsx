import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Embla = tw.div`absolute top-0 left-0 overflow-hidden h-96 h-full w-full`;
const EmblaContainer = tw.div`flex absolute top-0 left-0 w-full h-full`;
const EmblaSlide = tw.div`flex-embla relative`;

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <Embla className="embla" ref={emblaRef}>
      <EmblaContainer className="embla__container">
        {images.map((image, i) => (
          <EmblaSlide className="embla__slide" key={i}>
            <Image
              src={image}
              alt="hero"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </EmblaSlide>
        ))}
      </EmblaContainer>
    </Embla>
  );
};

export default Carousel;
