export interface TicketmasterResponse {
  _embedded: {
    events: Event[];
  };
  page: PageInfo;
}

// Informações sobre cada evento
interface Event {
  id: string;
  name: string;
  type: string;
  url: string;
  locale: string;
  images: Image[];
  dates: Dates;
  classifications: Classification[];
  _embedded: {
    venues: Venue[];
  };
}

// Detalhes de página
interface PageInfo {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

// Detalhes das imagens do evento
interface Image {
  url: string;
  width: number;
  height: number;
}

// Informações sobre as datas do evento
interface Dates {
  start: {
    localDate: string;
    localTime: string;
    dateTime: string;
  };
  status: {
    code: string;
  };
}

// Classificação do evento, como gênero e tipo
interface Classification {
  segment: {
    id: string;
    name: string;
  };
  genre: {
    id: string;
    name: string;
  };
  subGenre?: {
    id: string;
    name: string;
  };
  type?: {
    id: string;
    name: string;
  };
  subType?: {
    id: string;
    name: string;
  };
}

// Detalhes sobre o local (venue)
interface Venue {
  name: string;
  type: string;
  id: string;
  locale: string;
  postalCode?: string;
  timezone?: string;
  city: {
    name: string;
  };
  state?: {
    name: string;
    stateCode: string;
  };
  country: {
    name: string;
    countryCode: string;
  };
  address?: {
    line1: string;
    line2?: string;
  };
  location?: {
    longitude: string;
    latitude: string;
  };
}