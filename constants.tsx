import { Testimonial, Photo, ShowDate, Video } from './types';

/**
 * MEDIA MANAGEMENT SECTION
 * ---------------------------------------------------------
 * HERO_BACKGROUND_URL: The classic grey-hue crowd photo for the top section.
 */
export const HERO_BACKGROUND_URL = "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=2000";

/**
 * BIO_IMAGE_URL: The high-energy crowd shot for the "Story" section.
 */
export const BIO_IMAGE_URL = "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200";

/**
 * SOCIAL MEDIA LINKS
 */
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/ColleenTheBleedingHearts/",
  instagram: "https://www.instagram.com/colleenthebleedinghearts/",
  youtube: "https://www.youtube.com/@colleenthebleedinghearts4686"
};

export const VIDEOS: Video[] = [
  {
    id: 'ribfest-24-sugar',
    title: "BROWN SUGAR",
    venue: "Scarborough Rib Fest",
    year: "2024",
    embedUrl: "https://www.youtube.com/embed/frfgCOY8Dbw",
    directUrl: "https://www.youtube.com/watch?v=frfgCOY8Dbw",
    description: "The energy was through the roof at the 2024 Scarborough Rib Fest for our Stones tribute."
  },
  {
    id: 'ribfest-23-misty',
    title: "MISTY MOUNTAIN HOP",
    venue: "Scarborough Rib Fest",
    year: "2023",
    embedUrl: "https://www.youtube.com/embed/j3YL8NFQZg0",
    directUrl: "https://www.youtube.com/watch?v=j3YL8NFQZg0",
    description: "A standout moment from our 2023 set at the Scarborough Rib Fest performance."
  },
  {
    id: '5',
    title: "JEALOUS AGAIN",
    venue: "The Atria",
    year: "Live",
    embedUrl: "https://www.youtube.com/embed/ZSVyLA5CCJA",
    directUrl: "https://www.youtube.com/watch?v=ZSVyLA5CCJA",
    description: "Taking the stage at the legendary rock n roll bar The Atria in downtown Oshawa."
  },
  {
    id: '4',
    title: "I HATE MYSELF FOR LOVING YOU",
    venue: "Scarborough Ribfest",
    year: "2025",
    embedUrl: "https://www.youtube.com/embed/bTKBIpcyQ_w",
    directUrl: "https://www.youtube.com/watch?v=bTKBIpcyQ_w",
    description: "Channeling our inner Joan Jett at the 2025 Scarborough Ribfest."
  },
  {
    id: '1',
    title: "EX'S & OH'S",
    venue: "Black Swan Tavern",
    year: "2025",
    embedUrl: "https://www.youtube.com/embed/mVY-ATIWLtI",
    directUrl: "https://www.youtube.com/watch?v=mVY-ATIWLtI",
    description: "High-energy performance at the historic Black Swan Tavern."
  }
];

export const SHOW_DATES: ShowDate[] = [
  { 
    id: 'atria-feb-14', 
    date: 'FEB 14', 
    venue: 'The Atria Bar & Grill', 
    city: '59 King St E, Oshawa, ON', 
    ticketLink: '#' 
  },
  { 
    id: 'swan-feb-21', 
    date: 'FEB 21', 
    venue: 'The Black Swan Tavern', 
    city: '154 Danforth Ave, Toronto, ON', 
    ticketLink: '#' 
  },
  { 
    id: 'southside-apr-11', 
    date: 'APR 11', 
    venue: "Southside Johnny's Bar & Grill", 
    city: '3653 Lake Shore Blvd W, Etobicoke, ON', 
    ticketLink: '#' 
  },
  { 
    id: 'bear-may-30', 
    date: 'MAY 30', 
    venue: 'Black Bear Pub', 
    city: "1125 O'Connor Dr, East York, ON", 
    ticketLink: '#' 
  },
  { 
    id: 'swan-jun-20', 
    date: 'JUN 20', 
    venue: 'The Black Swan Tavern', 
    city: '154 Danforth Ave, Toronto, ON', 
    ticketLink: '#' 
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'bill-swan',
    name: 'Bill',
    location: 'Owner, Black Swan Tavern (Toronto)',
    quote: "One of the tightest bands we’ve had on our stage. A true fan favourite, they’ve been playing regularly at the Black Swan for over 10 years."
  },
  {
    id: 'christian-fan',
    name: 'Christian',
    location: 'Fan (Toronto)',
    quote: "Colleen & The Bleeding Hearts are the real deal — high energy with a stage presence that demands your attention."
  },
  {
    id: 'mark-bear',
    name: 'Mark',
    location: 'Owner, Black Bear Pub (East York)',
    quote: "They know how to get the crowd going. Great song selection and nonstop energy from start to finish."
  }
];

/**
 * PHOTO GALLERY (Not rendered in UI)
 */
export const GALLERY: Photo[] = [
  { id: 'pic-1', url: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800', caption: 'The Stage' },
  { id: 'pic-2', url: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=800', caption: 'Rocking Out' },
  { id: 'pic-3', url: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=800', caption: 'Live Night' },
  { id: 'pic-4', url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', caption: 'Crowd Energy' },
  { id: 'pic-5', url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800', caption: 'Bleeding Hearts' },
  { id: 'pic-6', url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=800', caption: 'GTA Scene' },
];
