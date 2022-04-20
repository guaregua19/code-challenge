import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "regenerator-runtime/runtime";
import { MoralisProvider } from 'react-moralis';
import { moralisAppId, moralisServerUrl } from '../constants/constants';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerUrl}> 
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
