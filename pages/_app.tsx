import { GlobalStyles } from 'twin.macro'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../src/store';
import "tailwindcss/tailwind.css";
import '../src/styles/fonts.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
