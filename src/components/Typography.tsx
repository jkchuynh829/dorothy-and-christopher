import tw, { styled } from 'twin.macro';

/**
 * Body Text
 */
export const Paragraph = styled.p`
  ${tw`font-body text-base`}
`;

/**
 * Headings
 */

 export const H1 = styled.h1`
  ${tw`font-heading text-6xl`}
`;

export const H2 = styled.h2`
  ${tw`font-heading text-5xl`}
`;

export const H3 = styled.h3`
  ${tw`font-heading text-4xl`}
`;

export const H4 = styled.h4`
  ${tw`font-heading text-3xl`}
`;

export const H5 = styled.h5`
  ${tw`font-heading text-2xl`}
`;

/**
 * Miscellaneous
 */
export const Accent = styled.span`
  ${tw`font-accent`}
`;