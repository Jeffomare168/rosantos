import Link from 'next/link';
import {useState} from 'react';

import {Image} from '@/components';
import {useInterval} from '@/hooks/useInterval';
import {Loader, Head} from '@/utils';


import styles from '@/styles/404.module.css';

export default function Custom404 () {
  return <NotFound />;
}

export const NotFound = () => {
  const [loading, setLoading] = useState (true);

  useInterval (() => setLoading (false), 1500);

  return (
    <>
      {!loading && 

        <div className={styles['pge__err']}>
          <Head title={'404 - Page not found!'}/>
          <Image src={`/apps/sokoetu/pb/404.svg`} alt="not found" internal={true} />
          <h2>The page you seek does not exist!</h2>

          <p>
            Perhaps you might want to recollect your steps at
            <Link href="/"> {' << '}HOME{' >> '}</Link>
            !
          </p>
        </div>
      }
      {
        loading && <Loader loading={loading}/>
      }
    </>
  );
};
