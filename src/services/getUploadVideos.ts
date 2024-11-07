import { YouTubeChannelDetailsResponse, YouTubeSearchResponse } from "@/types/getchanelidresponse";
import { youtubeAPI } from "./api";

export async function getUplodVideosFromName(name:string) {
  const channelId = await getChanellId({chanellName: name})
  const playlistId = await getPlaylistId(channelId)
  const videos = await getUplodVideo(playlistId)
  return videos
}
async function getChanellId({chanellName}: {chanellName: string}) {
  const response = await youtubeAPI.get("/search", {
    params: {
      part: "snippet",
      q: chanellName,
      type: "channel",
      fields: "items(id,snippet)",
    },
  })
  const data: YouTubeSearchResponse = response.data
  if(data.items.length === 0) {
    throw new Error("Canal não encontrado")
  }
  return data.items[0].id.channelId
}
async function getPlaylistId(chanellId: string) {
  const response = await youtubeAPI.get("/channels", {
    params: {
      part: "contentDetails",
      id: chanellId,
    }
  })  
  const data: YouTubeChannelDetailsResponse = response.data
  return data.items[0].contentDetails.relatedPlaylists.uploads
}
async function getUplodVideo(playlistId:string) {
  const response = await youtubeAPI.get("/playlistItems", {
    params: {
      part: "snippet",
      playlistId: playlistId,
      fields: "items(snippet)"
    }
  })
  return response.data
}