import axios from "axios";

const YOUTUBE_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const TICKET_KEY = process.env.NEXT_PUBLIC_TICKET_MASTER_API_KEY;

export const youtubeAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3", params: {
    key: YOUTUBE_KEY
  }
});
export const ticketAPI = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2", params: {
    apikey: TICKET_KEY
  }
})