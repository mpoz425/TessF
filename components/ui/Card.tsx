import React from 'react';

interface CardProps {
  title: string;
  summary: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, summary, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <h2 className="font-bold text-xl mb-2 text-softBlue">{title}</h2>
      <p className="text-gray-700 text-base">{summary}</p>
      <a href={link} className="inline-block bg-softBlue text-white mt-4 px-4 py-2 rounded hover:bg-blue-700 transition-colors">
        Read More
      </a>
    </div>
  );
};

export default Card;
