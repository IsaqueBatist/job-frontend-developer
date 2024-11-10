"use client";
import { getArtistEvents } from "@/services/getartirstEvents";
import { getUplodVideosFromName } from "@/services/getUploadVideos";
import { YouTubePlaylistItemsResponse } from "@/types/getchanelidresponse";
import { TicketmasterResponse } from "@/types/ticketmasterresponse"; 
import { useState } from "react";
import styles from "@/styles/Home.module.css";
export default function Home() {
  const [youtubeData, setYoutubeData] = useState< YouTubePlaylistItemsResponse | null>(null);
  const [ticketMasterData, setTicketMasterData] = useState<TicketmasterResponse | null>(null);

  async function getData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const artistName: string = e.currentTarget.artistName.value
    const artistData = await getArtistEvents(artistName)
    const uploadVideoData = await getUplodVideosFromName(artistName)
    setYoutubeData(uploadVideoData)
    setTicketMasterData(artistData)
  }
  return (
    <div className={styles.mainContainer}>      
      <form  className={styles.form} onSubmit={getData}>
        <input className={styles.input} list="artists" name="artistName" placeholder="Nome do artista" />
        <datalist id="artists">
        <option value="Chrome"></option>
          <option value="Firefox"></option>
          <option value="Internet Explorer"></option>
          <option value="Opera"></option>
          <option value="Safari"></option>
        </datalist>
        <button className={styles.button} type="submit">Procurar</button>
      </form>
    </div>
  );
}

