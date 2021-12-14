import React, { useEffect, useState } from "react";
import styles from '../styles/Card.module.css'
import Image from "next/image";
import { useRouter } from "next/router";


export default function Card(props){
    const [selected, setSelected] = useState(null);
    const router = useRouter();

    useEffect(() => {
        console.log(selected)
    }, [selected]);

    const gotoproductpage = (name) => {
        router.push('[productname]', `${props.title}`)
    }

    return (
        <>
        {(props && props.img)&& (
        <div className={styles.card_produit}>
            <h2>{props.title}</h2>
            <Image src={props.img} alt="oui" width="150px" height="150px" />
            <p>{props.desc}</p>
            <h4>{props.price} €</h4>
            <button onClick={() => {
                gotoproductpage(props.title), 
                localStorage.setItem("selected_product", JSON.stringify(props))}
            }> Achetez !</button>
        </div>
        )}
        </>
    )
}