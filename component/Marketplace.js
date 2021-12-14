import react, { useState, useEffect } from "react"
import styles from '../styles/Marketplace.module.css'
import Card from "./card";

export default function Marketplace() {
const [user, setUser] = useState(null);

    return (
        <div >
            <h2 className={styles.titre}>Marketplace</h2>
            <h4>Trouvez votre chat :</h4>
            <div className={styles.marketcontainer}>
                <Card title="Speedy" desc="Incroyable matou" price="15O" img="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                <Card title="Maneïa" desc="Chat poil long noir et blanc, aime les autres animaux" price="170" img="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                <Card title="Blanche neige" desc="Chat très calme" price="135" img="https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>
    )
}
