import tw, { styled } from 'twin.macro';

const Container = styled.div<{ clipText: boolean; fullWidth: boolean }>`
  ${tw`px-5 py-10`} // prevent clipping
  ${({ fullWidth }) => fullWidth && tw`px-0`};
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
  fullWidth?: boolean;
}

type GoldTextClipProps = React.PropsWithChildren<GoldTextClipBase>;

const GoldTextClip = ({
  children,
  clipText = true,
  fullWidth = false,
}: GoldTextClipProps) => {
  return (
    <Container clipText={clipText} fullWidth={fullWidth}>
      {children}
    </Container>
  );
};

export default GoldTextClip;
