import React, {useState, useEffect} from "react";
import styles from '../styles/Card.module.css'
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Card(props){
    const [selected, setSelected] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
        console.log(selected)
    }, [selected]);

    const gotoproductpage = () => {
        router.push('[productname]', `/${props.title}`);
    }

    return (
        <div className={styles.card_produit}>
            <h2>{props.title}</h2>
            <div></div>
            <p>{props.desc}</p>
            <h4>{props.price} €</h4>
            <button onClick={() => {
                gotoproductpage(props.title),
                localStorage.setItem("selected_product", JSON.stringify(props))
            }}> Achetez !</button>
        </div>
    )
}