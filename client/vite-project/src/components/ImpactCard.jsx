// ImpactCard.jsx
import React from 'react';

const ImpactCard = ({ icon, statistic, label }) => {
  return (
    <div className="
      flex flex-col items-center justify-center p-8 rounded-xl
      bg-white/10 shadow-lg border border-white/5
      w-full max-w-sm 
    ">
     
      <div className="text-4xl mb-4 text-white opacity-80">
        {icon}
      </div>
  
      <p className="text-4xl font-bold text-white mb-1">
        {statistic}
      </p>
    
      <p className="text-xl text-white  font-medium text-center">
        {label}
      </p>
    </div>
  );
};

export default ImpactCard;