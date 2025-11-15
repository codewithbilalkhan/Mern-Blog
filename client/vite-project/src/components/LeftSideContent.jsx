import React from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import StatCard from "./StatCard";

const LeftSideContent = ({icon, title, headingSecondary, paragraph, ticks = true, stats}) => {
  return (
    <div
      className="
      p-8 lg:p-12 xl:p-16 flex flex-col justify-center
      text-center lg:text-left
    "
    >
     <p className="
      inline-flex items-center text-sm font-semibold text-blue-600 bg-blue-100 
      px-3 py-1 rounded-full mb-6 max-w-max mx-auto lg:mx-0
    ">
     
      <span className="w-4 h-4 mr-2 text-blue-600 flex items-center justify-center">
       {icon} 
      </span>
      {title}
    </p>

     <h1 className="
        text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6
      ">

        Connect Today<br/>And Start<br/>
       
        <span className="text-blue-600">
          {headingSecondary}
        </span>
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
      {paragraph}
      </p>

      {stats && stats.length > 0 && (
        <div className="
          mt-2 pt-1  border-indigo-200
          grid grid-cols-1 sm:grid-cols-3 gap-4 
          w-full 
        ">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              statistic={stat.statistic} 
              label={stat.label} 
            />
          ))}
        </div>
      )}

     { ticks &&(
      <ul className="space-y-4 max-w-lg mx-auto lg:mx-0 text-left">
        <li className="flex items-center text-lg text-gray-800">
          <CheckCircle className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
          Free account with unlimited articles
        </li>
        <li className="flex items-center text-lg text-gray-800">
          <CheckCircle className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
          Connect with readers worldwide
        </li>
        <li className="flex items-center text-lg text-gray-800">
          <CheckCircle className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
          Build your personal brand
        </li>
      </ul>
        )}
    </div>

  );
};

export default LeftSideContent;
