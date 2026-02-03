
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
}

export interface ShowDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
}

export interface Video {
  id: string;
  title: string;
  venue: string;
  year: string;
  embedUrl: string;
  directUrl: string;
  description: string;
}
