import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a >AtomX Tech</a>
        </h1>


        <p className={styles.description}>
        Delivering affordable tech for early stage startups
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About us &rarr;</h2>
            <p>Data shows that almost 80% of the entrepreneurs are not able to launch their 1st version of the idea.</p>
            <br></br>
            <p>Read more ...</p>
           </a>

          <a href="/services" className={styles.card} style={{height:"270px"}}>
            <h2>Our Services &rarr;</h2>
            <p>We provide almost all the services that will launch your next big thing.</p>
            <br></br>
        
            <p >Read more ...</p>
          </a>

          <a
            href="/portfolio"
            className={styles.card}
          >
            <h2>Out Portfolio &rarr;</h2>
            <p>We have helped many early stage entrepreneurs to launch their idea. 
               Click here to find some of out works .</p>
               <br></br>
               <p>Read more ...</p>
          </a>

          <a
            href="https://forms.gle/KtNVJm16mHx8bZSh7"
            className={styles.card} style={{height:"270px"}}
          >
            <h2>Contact us &rarr;</h2>
            <p>
            Have an idea but don’t know how to start due to budget issue ?
           
            </p>
            <br></br>
            <p> Submit your requirement</p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  )
}
