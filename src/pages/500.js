import {useState} from 'react';

import {Image} from '@/components';
import {useInterval} from '@/hooks/useInterval';
import {Loader, Head} from '@/utils';

import styles from '@/styles/404.module.css';
import { IMAGES } from '@/assets';
 
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
          <Image src={IMAGES.ServerError.src} alt="not found" internal={true}/>
          <h3>Server ERROR!</h3>
        </div>
      }
      {
        loading && <Loader loading={loading}/>
      }
    </>
  );
};