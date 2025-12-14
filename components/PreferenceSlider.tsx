import React from 'react';

interface PreferenceSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

const PreferenceSlider: React.FC<PreferenceSliderProps> = ({ 
  label, 
  value, 
  onChange, 
  description,
  icon,
  colorClass
}) => {
  return (
    <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-slate-800 ${colorClass}`}>
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-white">{label}</h3>
            <p className="text-xs text-slate-400">{description}</p>
          </div>
        </div>
        <span className={`text-xl font-bold ${colorClass}`}>{value}</span>
      </div>
      
      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:bg-slate-600 transition-colors"
      />
      <div className="flex justify-between mt-1 text-xs text-slate-500 font-mono">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
};

export default PreferenceSlider;