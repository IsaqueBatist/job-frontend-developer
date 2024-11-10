//https://app.ticketmaster.com/discovery/v2/events?apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG&keyword=Coldplay&size=10

import { TicketmasterResponse } from "@/types/ticketmasterresponse";
import { ticketAPI } from "./api";

export async function getArtistEvents (artistName: string) {
  const response = await ticketAPI.get("/events", {
    params: {
      keyword: artistName,
      size: 10
    }
  });
  const data: TicketmasterResponse = response.data;
  return data;
};