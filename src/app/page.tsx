"use client";
import { getAttractionsByName } from "@/services/getartirstEvents";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";
export default function Home() {
  const router = useRouter();

  function switchPage(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const artistName: string = e.currentTarget.artistName.value
    if(artistName){
      router.push(`attraction/${artistName.replace(" ", "")}`)
    }
  }
  return (
    <div className={styles.mainContainer}>
      <form className={styles.form} onSubmit={switchPage}>
        <input className={styles.input} list="artists" name="artistName" placeholder="Nome do artista" />
        <datalist id="artists">
          <option value="Chrome"></option>
          <option value="Firefox"></option>
        </datalist>
        <div>
          <button className={styles.button} type="submit">Procurar</button>
        </div>
      </form>
    </div>
  );
}

