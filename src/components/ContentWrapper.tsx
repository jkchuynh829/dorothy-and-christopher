import tw from 'twin.macro';

const Container = tw.main`relative w-full px-12 max-w-5xl`;

interface ContentWrapperBase {}

type ContentWrapperProps = React.PropsWithChildren<ContentWrapperBase>;

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <Container>{children}</Container>;
};

export default ContentWrapper;
