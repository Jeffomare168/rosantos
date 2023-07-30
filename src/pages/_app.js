import '@/styles/globals.css';
import { StateProvider } from "@/context/StateProvider";
import reducer, { initialState } from "../context/reducers";

import  Layout  from "@/components/Layout"; 
import  AuthLayout  from "@/components/AuthLayout"; 

import { ErrorBoundary } from '@/utils';

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {Component.getLayout &&  
       <AuthLayout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
       </AuthLayout>
      }
      {!Component.getLayout && 
          <Layout>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        }
    </StateProvider>
  )
  
  
}
