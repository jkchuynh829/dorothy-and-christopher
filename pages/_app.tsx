import tw, { GlobalStyles } from 'twin.macro';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/store';
import 'tailwindcss/tailwind.css';
import '../src/styles/fonts.scss';
import Navigation from '../src/components/Navigation';

const Container = tw.div`flex relative flex-col h-full w-full`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <GlobalStyles />
      <Provider store={store}>
        <Navigation />
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
};

export default App;
