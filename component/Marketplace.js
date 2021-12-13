import react, { useState, useEffect } from "react"
import styles from '../styles/Marketplace.module.css'
import Card from "./card";

export default function Marketplace() {
const [user, setUser] = useState(null);

    return (
        <div >
            <h2 className={styles.titre}>Marketplace</h2>
            <div className={styles.marketcontainer}>
                <Card title="Titre 1" desc="blablabla" price="30"/>
                <Card title="Titre 2" desc="pixpixpxi" price="700"/>
                <Card title="Titre 3" desc="poufpouf" price="5"/>
                <Card title="Titre 2" desc="pixpixpxi" price="700"/>
                <Card title="Titre 3" desc="poufpouf" price="5"/>
            </div>
        </div>
    )
}
