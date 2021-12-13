import { GlobalStyles } from 'twin.macro';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import store from '../src/store';
import Navigation from '../src/components/Navigation';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import '../src/styles/fonts.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <GlobalStyles />
        <Navigation disableScrollEffect={pathname !== '/'} />
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  );
};

export default App;
