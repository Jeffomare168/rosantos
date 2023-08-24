// react query setup
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; 
// react toast setup
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a client
const queryClient = new QueryClient()


import { StateProvider } from "@/context/StateProvider";
import reducer, { initialState } from "../context/reducers";

import  Layout  from "@/components/Layout"; 
import  AuthLayout  from "@/components/AuthLayout"; 

import { ErrorBoundary } from '@/utils';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </QueryClientProvider>
  )
  
  
}
