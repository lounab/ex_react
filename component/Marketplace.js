import react, { useState, useEffect } from "react"
import styles from '../styles/Marketplace.module.css'
import Card from "./card";

export default function Marketplace() {
const [user, setUser] = useState(null);

    return (
        <div >
            <h2 className={styles.titre}>Marketplace</h2>
            <div className={styles.marketcontainer}>
                <Card title="Album 1" desc="blablabla" price="30"/>
                <Card title="Album 2" desc="pixpixpxi" price="70"/>
                <Card title="Album 3" desc="poufpouf" price="5"/>
            </div>

            <h2 className={styles.titre}>Favoris</h2>
            <div className={styles.marketcontainer}>
                <Card title="Album 4" desc="incriyable" price="15"/>
                <Card title="Album 5" desc="nouveau style jamais vu" price="17"/>
                <Card title="Album 6" desc="woaw" price="35"/>
            </div>
        </div>
    )
}
