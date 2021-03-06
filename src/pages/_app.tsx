import { useEffect, useState } from 'react';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core';
import theme from 'ui/themes/theme';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
    },[])
  
  return(
    <>
     <Head>
        <title>e-diaristas</title>
     </Head>
     <ThemeProvider theme={theme}>
       <Component {...pageProps} />
     </ThemeProvider>
     
    </> 
  );
}
export default MyApp
