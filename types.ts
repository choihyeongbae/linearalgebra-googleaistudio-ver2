export interface Vector3 {
  action: number;
  story: number;
  visual: number;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  genres: string[];
  description: string;
  vectors: Vector3; // The feature vector (0-10 scale)
}

export interface ScoredMovie extends Movie {
  similarity: number; // Cosine similarity score (0.0 - 1.0)
}

export interface ChartDataPoint {
  subject: string;
  User: number;
  Movie: number;
  fullMark: number;
}