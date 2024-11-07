"use client";
import { getArtistEvents } from "@/services/getartirstEvents";
import { getUplodVideosFromName } from "@/services/getUploadVideos";
import { YouTubePlaylistItemsResponse } from "@/types/getchanelidresponse";
import { TicketmasterResponse } from "@/types/ticketmasterresponse"; 
import { useState, useEffect } from "react";
export default function Home() {
  const [youtubeData, setYoutubeData] = useState< YouTubePlaylistItemsResponse | null>(null);
  const [ticketMasterData, setTicketMasterData] = useState<TicketmasterResponse | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const response: TicketmasterResponse = await getArtistEvents({ artistName: "Coldplay" });
        setTicketMasterData(response);
      } catch (error) {
        console.log("Erro ao buscar dados da API:", error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      try{
        const response = await getUplodVideosFromName("linkin park")
        setYoutubeData(response)
      }catch(error){  
        console.log("Erro ao buscar dados da API:", error)
      }
    }
    getData()
    }, [])

  return (
    <div>
      <h1>Buscando artistas</h1>
      <form>
        <input type="text" placeholder="Nome do artista" />
        <button type="submit">Procurar</button>
      </form>
    </div>
  );
}
function getChanellId(arg0: { chanellName: string; }) {
  throw new Error("Function not implemented.");
}

