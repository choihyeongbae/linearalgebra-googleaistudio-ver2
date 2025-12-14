import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Vector3, ChartDataPoint } from '../types';

interface SimilarityRadarProps {
  userVector: Vector3;
  movieVector: Vector3;
  movieTitle: string;
}

const SimilarityRadar: React.FC<SimilarityRadarProps> = ({ userVector, movieVector, movieTitle }) => {
  const data: ChartDataPoint[] = [
    {
      subject: 'Action',
      User: userVector.action,
      Movie: movieVector.action,
      fullMark: 10,
    },
    {
      subject: 'Story',
      User: userVector.story,
      Movie: movieVector.story,
      fullMark: 10,
    },
    {
      subject: 'Visuals',
      User: userVector.visual,
      Movie: movieVector.visual,
      fullMark: 10,
    },
  ];

  return (
    <div className="w-full h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#475569" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 'bold' }} />
          <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
          
          <Radar
            name="My Preference"
            dataKey="User"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="#3b82f6"
            fillOpacity={0.4}
          />
          <Radar
            name={movieTitle.length > 15 ? movieTitle.substring(0, 15) + '...' : movieTitle}
            dataKey="Movie"
            stroke="#10b981"
            strokeWidth={2}
            fill="#10b981"
            fillOpacity={0.4}
          />
          <Legend wrapperStyle={{ fontSize: '12px', marginTop: '10px' }}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimilarityRadar;