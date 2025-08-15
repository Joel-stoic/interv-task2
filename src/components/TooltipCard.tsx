import React from 'react';
import { BsTag } from 'react-icons/bs'; // Example icon, you can replace it or pass as prop

interface TooltipCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;  // optional icon prop
}

const TooltipCard: React.FC<TooltipCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg w-48 text-white">
      <div className="bg-gray-700 rounded-full p-2 mb-2">
        {icon || <BsTag className="text-orange-400 text-xl" />}
      </div>
      <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
      <p className="text-gray-300 text-xs text-center">{description}</p>
    </div>
  );
};

export default TooltipCard;
