import { youtubeAPI } from "./api";
//https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=linkin%20park&key=AIzaSyBuBbfr70xoCRmoAp68sZBtJVK2xEtQo1g
export async function getChanellId({chanellName}: {chanellName: string}) {
  const response = await youtubeAPI.get("/search", {
    params: {
      part: "snippet",
      q: chanellName,
      type: "channel",  
    },
  })
  const data = response.data
  console.log(data)
}