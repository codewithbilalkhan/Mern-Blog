import React from 'react'

const StatCard = ({statistic, label}) => {
  return (
    <div className="
      flex flex-col items-center justify-center 
      p-4 rounded-lg 
      bg-white shadow-sm border border-gray-100 
      w-full min-h-[100px]
    ">
    
      <p className="
        text-2xl font-bold 
        text-gray-900 mb-1 
        tracking-tight
      ">
        {statistic}
      </p>
    
      <p className="
        text-sm 
        text-gray-600 
        font-medium
      ">
        {label}
      </p>
    </div>
  )
}

export default StatCard
