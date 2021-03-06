import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../component/Navbar'
import styles from '../../styles/App.module.css'
import Marketplace from '../../component/Marketplace'
import Card from '../../component/card'



export default function Home() {
  const [maCard, setCard] = useState(null);

  useEffect(() => {
    setCard(JSON.parse(localStorage.getItem('selected_product')))
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Navbar/>
        
        <h2 className={styles.titre}>Votre futur chat ?</h2>
          { maCard && (
          <Card title={maCard.title} desc={maCard.desc} price={maCard.price} img={maCard.img}/>
          ) 
          }
      </main>
    </div>
  )
}
