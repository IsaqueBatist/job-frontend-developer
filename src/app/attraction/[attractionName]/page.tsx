"use client";
import styles from "@/styles/AttratcionSearched.module.css"
import Image from "next/image";

interface AttratcionSearchProps {
  params:  {
    attractionName: string
  }
}

export default function AttratcionSearch({params}: AttratcionSearchProps) {
  return (
    <div className={styles.mainContainer}>
      <h2>{params.attractionName}</h2>
      <div className={styles.attractionsFetched}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            imagem
          </div>
          <div className={styles.cardDescription}>
            <h3>Chase atlantic</h3>
            <p>rock</p>
            <div className={styles.socialMedias}>
                <Image src="/imagens/spotify.svg" alt="spotify" width={20} height={20} />
                <Image src="/imagens/instagram.svg" alt="instagram" width={20} height={20} />
                <Image src="/imagens/x.svg" className={styles.x} alt="x" width={20} height={20} />
                <Image src="/imagens/youtube.svg" alt="youtube" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}