import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { GlobalStyles } from 'twin.macro'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../src/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};

export default App;
