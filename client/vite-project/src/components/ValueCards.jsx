import React from "react";

const ValueCards = ({ IconComponent, title, paragraph, index }) => {
  return (
    <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:ring-2 hover:ring-blue-500 w-full min-h-[220px]">
      <div
        className="absolute top-[-15px] left-[-15px] sm:-top-5 sm:-left-5 
                    flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 
                    rounded-xl bg-blue-600 shadow-xl shadow-blue-300 z-10"
      >
        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-2" />

        <div
          className="absolute top-0 -right-2.5 sm:-right-3 
                      flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 
                      rounded-full bg-white text-blue-600 text-xs font-bold 
                      border-2 border-blue-600 shadow-md"
        >
          {index}
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-2 mt-4 sm:mt-6 tracking-tight">
        {title}
      </h2>

      <p className="text-gray-600 leading-relaxed text-lg">{paragraph}</p>
    </div>
  );
};

export default ValueCards;
