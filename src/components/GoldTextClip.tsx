import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`px-5 py-10`} // prevent clipping
  background: linear-gradient(
    25deg,
    #c39331,
    #ebe49c,
    #c29c4b,
    #fbf5b7,
    #aa771c
  );
  background-clip: text;
  text-fill-color: transparent;
`;

interface GoldTextClipBase {}

type GoldTextClipProps = React.PropsWithChildren<GoldTextClipBase>;

const GoldTextClip = ({ children }: GoldTextClipProps) => {
  return <Container>{children}</Container>;
};

export default GoldTextClip;
