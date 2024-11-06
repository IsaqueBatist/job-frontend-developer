"use client";

import { getArtistEvents } from "@/services/getartirstEvents";
import { getChanellId } from "@/services/getchanelId";
import { TicketmasterResponse } from "@/types/ticketmasterresponse";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<TicketmasterResponse | null>(null); // Use `null` ao invés de `{}` para evitar problemas de tipagem

  useEffect(() => {
    async function getData() {
      try {
        const response: TicketmasterResponse = await getArtistEvents({ artistName: "Coldplay" });
        getChanellId({chanellName: "linkin park"})
        setData(response);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>API Ticketmaster Teste</h1>
      {data ? (
        <div>
          <h2>Eventos encontrados:</h2>
          {data._embedded.events.map((event) => (
            <div key={event.id}>
              <h3>{event.name}</h3>
              <p>Data: {event.dates.start.localDate}</p>
              <p>Local: {event._embedded.venues[0].name}</p>
            </div>
          ))}
        </div>
      ) : (
        "Nenhum dado disponível"
      )}
    </div>
  );
}
