import React from "react";
import styles from '../styles/Card.module.css'
import Image from "next/image";

export default function Card(props){
    return (
        <div className={styles.card_produit}>
            <h2>{props.title}</h2>
            <div></div>
            <p>{props.desc}</p>
            <h4>{props.price} euro</h4>
            <button onClick={() => console.log(props)}>Achetez !</button>
        </div>
    )
}