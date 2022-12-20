import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'
import Image from 'next/image'


export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
    <div className={styles.container}>
      <Head>
        <title>Homepage App</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<Navbar/>

      <main className={styles.main}>
				{ children }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
