import {useState} from 'react';

import {Image} from '@/components';
import {useInterval} from '@/hooks/useInterval';
import {Loader, Head} from '@/utils';

import styles from '@/styles/404.module.css';
 
export default function Custo500 () {
  return <ServerError />;
}

export const ServerError = () => {
  const [loading, setLoading] = useState (true);

  useInterval (() => setLoading (false), 1500);

  return (
    <>
      {!loading && 

        <div className={styles['pge__err']}>
          <Head title={'500 - Server Error!'}/>
          <Image src="/apps/sokoetu/pb/serverError.svg" alt="not found" internal={true}/>
          <h2>Server ERROR!</h2>

          <p>
            Hapa hatukatai, kuna developer amekanyang'a waya!
          </p>
        </div>
      }
      {
        loading && <Loader loading={loading}/>
      }
    </>
  );
};