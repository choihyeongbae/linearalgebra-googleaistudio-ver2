import React, { useState, useEffect } from 'react';
import { Vector3, ScoredMovie } from './types';
import { movieDatabase } from './data';
import { getRecommendations } from './utils';
import PreferenceSlider from './components/PreferenceSlider';
import MovieCard from './components/MovieCard';

// Icons as simple SVGs
const ActionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M10 9h8"/></svg>
);
const StoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const VisualIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const App: React.FC = () => {
  // State for user input vectors
  const [preferences, setPreferences] = useState<Vector3>({
    action: 5,
    story: 5,
    visual: 5,
  });

  const [recommendations, setRecommendations] = useState<ScoredMovie[]>([]);

  // Recalculate recommendations whenever preferences change
  useEffect(() => {
    const results = getRecommendations(preferences, movieDatabase, 10);
    setRecommendations(results);
  }, [preferences]);

  const handleSliderChange = (key: keyof Vector3, value: number) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 mb-8">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Movie Matcher AI
            </h1>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Powered by Cosine Similarity
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Controls */}
        <div className="md:col-span-5 lg:col-span-4 space-y-2">
          <div className="sticky top-24">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Define Your Taste
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Adjust the sliders below to find movies that match your current mood.
            </p>

            <PreferenceSlider
              label="Action & Intensity"
              description="Pacing, thrills, and excitement"
              value={preferences.action}
              onChange={(val) => handleSliderChange('action', val)}
              icon={<ActionIcon />}
              colorClass="text-red-400"
            />

            <PreferenceSlider
              label="Story & Depth"
              description="Plot complexity, emotion, drama"
              value={preferences.story}
              onChange={(val) => handleSliderChange('story', val)}
              icon={<StoryIcon />}
              colorClass="text-purple-400"
            />

            <PreferenceSlider
              label="Visuals & Aesthetics"
              description="Cinematography, effects, art"
              value={preferences.visual}
              onChange={(val) => handleSliderChange('visual', val)}
              icon={<VisualIcon />}
              colorClass="text-cyan-400"
            />

            <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-900/50 mt-6">
              <h4 className="text-xs font-bold text-blue-400 uppercase mb-2">How it works</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We calculate the <span className="text-white font-mono">Cosine Similarity</span> between your input vector <br/>
                <span className="font-mono text-blue-300">A = [{preferences.action}, {preferences.story}, {preferences.visual}]</span> <br/>
                and our database to find the mathematically closest matches.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="md:col-span-7 lg:col-span-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
            Top Recommendations
          </h2>
          
          <div className="space-y-4">
            {recommendations.map((movie, index) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                rank={index + 1} 
                userVector={preferences}
              />
            ))}
          </div>

          {recommendations.length === 0 && (
            <div className="text-center py-20 text-slate-600">
              No movies found. Try adjusting sliders.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;