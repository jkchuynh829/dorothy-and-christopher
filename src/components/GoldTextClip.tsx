import tw, { styled } from 'twin.macro';

const Container = styled.div<{ clipText: boolean }>`
  ${tw`px-5 py-10`} // prevent clipping
  background: linear-gradient(
    25deg,
    #c39331,
    #ebe49c,
    #c29c4b,
    #fbf5b7,
    #aa771c
  );
  background-clip: ${({ clipText }) => (clipText ? 'text' : 'content')};
  text-fill-color: transparent;
`;

interface GoldTextClipBase {
  clipText?: boolean;
}

type GoldTextClipProps = React.PropsWithChildren<GoldTextClipBase>;

const GoldTextClip = ({ children, clipText = true }: GoldTextClipProps) => {
  return <Container clipText={clipText}>{children}</Container>;
};

export default GoldTextClip;
