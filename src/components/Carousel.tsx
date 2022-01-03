import React, { useState, useEffect, useCallback } from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

const Embla = tw.div`absolute top-0 left-0 overflow-hidden h-96 h-full w-full`;
const EmblaContainer = tw.div`flex absolute top-0 left-0 w-full h-full`;
const EmblaSlide = tw.div`flex-embla relative`;

const DotsContainer = tw.div`absolute w-full h-36 md:h-24 flex justify-center items-center bottom-0`;

const ArrowsContainer = tw.div`absolute bottom-0 h-full w-full flex items-center justify-between text-white z-10 px-8 md:px-0`;
const Button = tw.button``;

const Dot = styled.div<{ selected: boolean }>`
  ${tw`h-3 w-3 rounded-full mx-4 bg-white opacity-35 hover:opacity-100 pointer-events-auto cursor-pointer z-20 pointer-events-auto`}
  ${({ selected }) => selected && tw`opacity-100`}
`;
const ArrowButton = styled(Icon)`
  ${tw`opacity-35 hover:opacity-100`}
`;

interface ArrowIconProps {
  path: string;
  onClick: () => void;
}
const ArrowIcon = ({ path, onClick }: ArrowIconProps) => (
  <Button onClick={onClick}>
    <ArrowButton path={path} size="56px" />
  </Button>
);

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);
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
      <DotsContainer>
        {images.map((_, i) => (
          <Dot
            key={i}
            selected={i === selectedIndex}
            onClick={() => scrollTo(i)}
          />
        ))}
      </DotsContainer>
      <ArrowsContainer>
        <ArrowIcon path={mdiChevronLeft} onClick={scrollPrev} />
        <ArrowIcon path={mdiChevronRight} onClick={scrollNext} />
      </ArrowsContainer>
    </Embla>
  );
};

export default Carousel;
