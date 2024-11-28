export interface AttractionResponse {
    attractions: Attraction[];
}

export interface Attraction {
  name: string;
  id: string;
  images: Image[];
  classifications?: Classification[];
  url: string;
  externalLinks?: ExternalLinks
}

export interface ExternalLinks {
  youtube: ExternalLink[];
  twitter: ExternalLink[];
  itunes: ExternalLink[];
  spotify: ExternalLink[];
  facebook: ExternalLink[];
  musicbrainz: MusicbrainzLink[];
  instagram: ExternalLink[];
  homepage: ExternalLink[];
}

export interface ExternalLink {
  url: string;
}

export interface MusicbrainzLink {
  id: string;
  url: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Classification {
  genre?: {
    name: string;
  };
  subGenre?: {
    name: string;
  };
}
