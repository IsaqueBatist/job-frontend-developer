"use client";

import { getAttractionsByName } from "@/services/getartirstEvents";
import styles from "@/styles/AttratcionSearched.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AttractionResponse } from "@/types/getAttractionByNameResponse";

export default function AttractionSearch() {
  const params = useParams(); // `params` é uma Promise
  const [attractions, setAttractions] = useState<AttractionResponse>([]);
  const [attractionName, setAttractionName] = useState<string>(null);

  async function fetchAttractions(name: string) {
    const artistData = await getAttractionsByName(name);
    setAttractions(artistData);
  }

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params; // Resolva a Promise
      const attractionName = String(resolvedParams?.attractionName || "")
      setAttractionName(attractionName.replace("%20", " ")); // Salva o nome da atração no estado
      if (attractionName) {
        fetchAttractions(attractionName.replace("%20", " "));
      }
    }
    resolveParams();
  }, [params]);
  if (!attractions) return <div>Loading...</div>;
  return (
    <div className={styles.mainContainer}>
      <h2>{attractionName}</h2>
      <div className={styles.attractionsFetched}>
      {attractions?.attractions && attractions.attractions.length > 0 ? (
        attractions.attractions.map((attraction, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardImage}>
              <Image 
              src={attraction.images[0].url} 
              alt="attractionImage" 
              fill 
              sizes="100%, 100%"
              priority
              />
            </div>
            <div className={styles.cardDescription}>
              <h3>{attraction.name}</h3>
              <p>{attraction.classifications?.[0]?.genre?.name}</p>
              <div className={styles.socialMedias}>
                {attraction?.externalLinks?.spotify?.[0]?.url ? (
                  <a target="_blank" href={attraction?.externalLinks?.spotify?.[0]?.url || '#'}>
                  <Image
                    src="/imagens/spotify.svg"
                    alt="spotify"
                    width={20}
                    height={20}
                    priority
                  />
                </a>
                ) : ""}
              {attraction?.externalLinks?.instagram?.[0]?.url ? (
              <a target="_blank" href={attraction?.externalLinks?.instagram?.[0]?.url || '#'}>
                <Image
                  src="/imagens/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                  priority
                />
              </a>
              ) : ""}
              {attraction?.externalLinks?.youtube?.[0]?.url ? (
              <a target="_blank" href={attraction?.externalLinks?.youtube?.[0]?.url || '#'}>
                <Image
                  src="/imagens/youtube.svg"
                  alt="youtube"
                  width={20}
                  height={20}
                  priority
                />
              </a>
              )  : ""}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No attractions available</p> // Exibe uma mensagem de fallback enquanto não há dados
      )}
        </div>
      <div className={styles.endofpage}>
        <Image src="/imagens/headphone.svg" width={100} height={100} alt="No more results" />
        <p>Sem mais resultados para ‘Chase atlantic’</p>
      </div>
    </div>
  );

}