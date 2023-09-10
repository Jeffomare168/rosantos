import  Layout  from "@/components/Layout"; 

import { ErrorBoundary } from '@/utils';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  )
}
