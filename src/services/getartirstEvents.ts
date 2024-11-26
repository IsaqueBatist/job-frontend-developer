//https://app.ticketmaster.com/discovery/v2/events?apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG&keyword=Coldplay&size=10

import { TicketmasterResponse } from "@/types/ticketmasterresponse";
import { ticketAPI } from "./api";

export async function getArtistEvents(artistName: string) {
  const artistId = await getAttractionId(artistName)
  const events = await getEventsById(artistId)
  return events
};

async function getAttractionId(keyword: string) {
  const response = await ticketAPI.get("/attractions", {
    params: {
      keyword: keyword
    }
  })
  const data = response.data
  return data._embedded.attractions[0].id
}

async function getEventsById(id: string) {
  const response = await ticketAPI.get("events", {
    params: {
      attractionId: id
    }
  })
  return response.data
}

export async function getAttractionsByName(keyword: string){
  const response = await ticketAPI.get("/attractions", {
    params: {
      keyword: keyword
    }
  })
  const data = response.data
  return data
}