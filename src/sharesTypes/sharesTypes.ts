export type Track = {
  _id: number;
  name: string;
  author: string;
  release_date: string; // строка, а не Data!
  genre: string[];
  duration_in_seconds: number;
  album: string;
  logo: null;
  track_file: string;
  stared_user: any[];
};