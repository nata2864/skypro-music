export type Track = {
  _id: number;
  name: string;
  author: string;
  release_date: string; 
  genre: string[];
  duration_in_seconds: number;
  album: string;
  logo: null;
  track_file: string;
  stared_user: any[];
};

export type CategoryTrack = {
 items: number[];        
  name: string;           
  owner: number[];        
  __v: number;
  _id: number;   
};