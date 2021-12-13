import tw, { GlobalStyles } from 'twin.macro';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/store';
import Navigation from '../src/components/Navigation';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import '../src/styles/fonts.scss';

const Container = tw.div`flex relative flex-col h-full w-full bg-white h-screen`;

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  return (
    <Container>
      <GlobalStyles />
      <Provider store={store}>
        <Navigation disableScrollEffect={pathname !== '/'} />
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
};

export default App;
