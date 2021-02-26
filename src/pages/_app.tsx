import '../styles/global.css';

import { ChallengedProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps}) {

  return (
    <ChallengedProvider>
      <Component {...pageProps} />
    </ChallengedProvider>
  )
};

export default MyApp;
