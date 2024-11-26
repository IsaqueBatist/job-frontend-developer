"use client";
import { getAttractionsByName } from "@/services/getartirstEvents";
import styles from "@/styles/AttratcionSearched.module.css"
import Image from "next/image";
import { useState } from "react";

interface AttratcionSearchProps {
  params: {
    attractionName: string
  }
}

export default function AttratcionSearch({ params }: AttratcionSearchProps) {
  const [attractions, setAttractions] = useState<any>(null)

  async function getData(attractionName: string) {
    const artistData = await getAttractionsByName(attractionName)
    setAttractions(artistData)
  }
  useState(() => {
    getData(params.attractionName)
  })
  return (
    <div className={styles.mainContainer}>
      <h2>{params.attractionName}</h2>
      <div className={styles.attractionsFetched}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image src="https://s1.ticketm.net/dam/a/a1b/b15b5669-92f3-4b09-98e6-0fb3a349ea1b_RETINA_PORTRAIT_16_9.jpg" alt="attractionImage" layout="fill" objectFit="cover" />
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
      <div className={styles.endofpage}>
        <Image src="/imagens/headphone.svg" width={100} height={100} alt="No more results" />
        <p>Sem mais resultados para ‘Chase atlantic’</p>
      </div>
    </div>
  );

}