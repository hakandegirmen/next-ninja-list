import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h2 className={styles.title}>Home Page</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro non, earum tempore molestias cupiditate aliquam facere quam exercitationem ducimus! Illo molestias vel saepe. Consectetur velit quae dignissimos mollitia deleniti!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro non, earum tempore molestias cupiditate aliquam facere quam exercitationem ducimus! Illo molestias vel saepe. Consectetur velit quae dignissimos mollitia deleniti!</p>
        <Link href="/ninjas"><a className={styles.btn}>Ninja Listing</a></Link>
      </div>
    </>

  )
}
