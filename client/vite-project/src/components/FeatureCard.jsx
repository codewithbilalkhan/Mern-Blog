

const FeatureCard = ({ IconComponent, title, paragraph}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:ring-2 hover:ring-blue-500 hover:shadow-xl w-full">

    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600 shadow-md mb-6">
      <IconComponent className="w-7 h-7 text-white stroke-2" />
    </div>

    <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
      {title}
    </h2>

    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
      {paragraph}
    </p>
  </div>
  )
}

export default FeatureCard
