import "@/styles/globals.css";
import '@/styles/calendarStyles.css';

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from "../hooks/authcontext";

// This file is the root of the application. 
// It is used to initialize pages and components.

function MyApp({ Component, pageProps }: AppProps) {
    return (
     <AuthProvider>
    <ChakraProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
