export interface YouTubeSearchResponse {
  items: Array<{
    id: {
      kind: string; // Geralmente "youtube#channel" para tipo de canal
      channelId: string; // ID do canal
    };
    snippet: {
      title: string; // Nome do canal
      description: string; // Descrição do canal
      publishedAt: string; // Data de criação do canal (ISO 8601 format)
      thumbnails: {
        default: Thumbnail;
        medium: Thumbnail;
        high: Thumbnail;
      };
      channelTitle: string; // Título do canal proprietário do vídeo (geralmente o mesmo para canais)
      liveBroadcastContent: string; // Status do conteúdo ao vivo (ex: "none")
    };
  }>;
}
export interface YouTubeChannelDetailsResponse {
  items: Array<{
    id: string; // ID do canal
    contentDetails: {
      relatedPlaylists: {
        uploads: string; // ID da playlist de vídeos upados pelo canal
        watchHistory?: string; // ID da playlist de histórico de visualização (se disponível)
        watchLater?: string; // ID da playlist de "Assistir mais tarde" (se disponível)
      };
    };
  }>;
}
export interface YouTubePlaylistItemsResponse {
  items: Array<{
    snippet: {
      publishedAt: string; // Data de publicação do vídeo (ISO 8601 format)
      title: string; // Título do vídeo
      description: string; // Descrição do vídeo
      thumbnails: {
        default: Thumbnail;
        medium: Thumbnail;
        high: Thumbnail;
        standard?: Thumbnail; // Thumbnail padrão (opcional)
        maxres?: Thumbnail; // Thumbnail de resolução máxima (opcional)
      };
      channelTitle: string; // Nome do canal que postou o vídeo
      playlistId: string; // ID da playlist em que o vídeo está
      position: number; // Posição do vídeo na playlist
      resourceId: {
        kind: string; // Tipo de recurso, geralmente "youtube#video"
        videoId: string; // ID do vídeo
      };
    };
  }>;
}

interface Thumbnail {
  url: string;
  width?: number;
  height?: number;
}
