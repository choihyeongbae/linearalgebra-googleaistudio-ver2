import React, { useState } from 'react';
import { ScoredMovie, Vector3 } from '../types';
import { formatScore } from '../utils';
import SimilarityRadar from './SimilarityRadar';

interface MovieCardProps {
  movie: ScoredMovie;
  rank: number;
  userVector: Vector3;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, rank, userVector }) => {
  const [expanded, setExpanded] = useState(false);

  // Dynamic border color based on similarity score
  const getBorderColor = (score: number) => {
    if (score > 0.95) return 'border-emerald-400';
    if (score > 0.90) return 'border-blue-400';
    return 'border-slate-700';
  };

  return (
    <div 
      className={`bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 border-l-4 ${getBorderColor(movie.similarity)} shadow-lg mb-4`}
    >
      <div 
        className="p-5 cursor-pointer hover:bg-slate-700/50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center w-12 h-12 bg-slate-900 rounded-full font-bold text-xl text-slate-300 border border-slate-700 shrink-0">
              #{rank}
            </div>
            <div>
              <h3 className="font-bold text-lg text-white leading-tight">{movie.title} <span className="text-slate-400 font-normal text-sm">({movie.year})</span></h3>
              <p className="text-slate-400 text-sm mt-1">{movie.director}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {movie.genres.map(g => (
                  <span key={g} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-xs border border-slate-700">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {formatScore(movie.similarity)}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Match</div>
          </div>
        </div>

        {/* Preview of breakdown */}
        <div className="mt-4 flex gap-4 text-xs text-slate-400 font-mono">
           <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Act: {movie.vectors.action}</span>
           <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Sty: {movie.vectors.story}</span>
           <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> Vis: {movie.vectors.visual}</span>
        </div>
      </div>

      {/* Expanded Details */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-5 pt-0 border-t border-slate-700 bg-slate-800/80">
          <p className="text-slate-300 italic mt-4 mb-4 leading-relaxed">
            "{movie.description}"
          </p>
          
          <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
            <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide text-center">Vector Analysis</h4>
            <SimilarityRadar 
              userVector={userVector}
              movieVector={movie.vectors}
              movieTitle={movie.title}
            />
            <p className="text-center text-xs text-slate-500 mt-2">
              Comparison of your preferences (Blue) vs. {movie.title} (Green)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;