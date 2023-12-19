export interface Show {
  id: number;
  name: string;
  summary: string;
  status: string;
  image: {
    original: string,
  };
  genres: string[];
  language: string;
}

export interface ShowResponse {
  score: number;
  show: Show;
}