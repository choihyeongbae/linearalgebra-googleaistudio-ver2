import { Vector3, Movie, ScoredMovie } from './types';

/**
 * Calculates the cosine similarity between two 3D vectors.
 * Cosine Similarity = (A . B) / (||A|| * ||B||)
 */
export const calculateCosineSimilarity = (vecA: Vector3, vecB: Vector3): number => {
  const dotProduct = (vecA.action * vecB.action) + (vecA.story * vecB.story) + (vecA.visual * vecB.visual);
  
  const magnitudeA = Math.sqrt(Math.pow(vecA.action, 2) + Math.pow(vecA.story, 2) + Math.pow(vecA.visual, 2));
  const magnitudeB = Math.sqrt(Math.pow(vecB.action, 2) + Math.pow(vecB.story, 2) + Math.pow(vecB.visual, 2));

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }

  return dotProduct / (magnitudeA * magnitudeB);
};

export const getRecommendations = (
  userPreferences: Vector3,
  database: Movie[],
  limit: number = 5
): ScoredMovie[] => {
  const scoredMovies = database.map((movie) => {
    const similarity = calculateCosineSimilarity(userPreferences, movie.vectors);
    return { ...movie, similarity };
  });

  // Sort by similarity descending
  scoredMovies.sort((a, b) => b.similarity - a.similarity);

  return scoredMovies.slice(0, limit);
};

export const formatScore = (score: number): string => {
  return (score * 100).toFixed(1) + "%";
};