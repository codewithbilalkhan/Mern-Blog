import React from "react";
import NavBar from "../components/NavBar";
import FeatureCard from "../components/FeatureCard";
import ValueCards from "../components/ValueCards";
import HeroSection from "../components/HeroSection";
import ImpactCard from "../components/ImpactCard";
import Footer from "../components/Footer";
import { Target, Eye,BookOpen, Heart, Users, Award, Globe, Zap, Sparkles } from "lucide-react";


const about = () => {
  const CardsData = [
    {
      id: 1,
      IconComponent: Target,
      title: "Our Mission",
      paragraph:
        "Everyone has a story worth sharing, in our opinion at MyBlog. Our platform gives users access to a variety of viewpoints and interesting information while giving writers the resources and community they require to express themselves.",
    },

    {
      id: 2,
      IconComponent: Eye,
      title: "Our Vision",
      paragraph:
        "We see a world where everyone has access to high-quality material and where authors from all backgrounds can discover their audience and voice. Our objective is to establish ourselves as the premier venue for genuine storytelling and insightful conversation.",
    },
  ];

 const Valuecardsdata =
  [
  {
    id: 1,
    IconComponent: Heart,
    title: "Authenticity",
    paragraph: "We celebrate genuine voices and original perspectives that make each story unique."
  },

   {
    id: 2,
    IconComponent: Users,
    title: "Community",
    paragraph: "Building connections between writers and readers through shared interests and passions."
  },


   {
    id: 3,
    IconComponent: Award,
    title: "Quality",
    paragraph: "Providing powerful tools and features that help writers create their best work.",
  },


  {
    id: 4,
    IconComponent: Globe,
    title: "Inclusivity",
    paragraph: "Creating a welcoming space for diverse voices and perspectives from around the world.",
  },

  
  {
    id: 5,
    IconComponent: Zap,
    title: "Inclusivity",
    paragraph: "Continuously improving our platform with cutting-edge features and user feedback.",
  },


  
  {
    id: 6,
    IconComponent: Sparkles,
    title: "Respect",
    paragraph: "Maintaining a respectful environment where all members feel valued and heard.",
  },

  ]


  const impactData = [
  {
    icon: <Users className="w-8 h-8" />,
    statistic: '10K+',
    label: 'Active Writers',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    statistic: '50K+',
    label: 'Published Articles',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    statistic: '100K+',
    label: 'Monthly Readers',
  },
];
  return (
    <>
      <NavBar />
      <HeroSection
        title="About MyBlog"
        subtitle="Empowering writers and readers to share stories that matter, creating connections that last a lifetime"
        showbuttons={false}
        showstats={false}
      />
      <div className="bg-gray-50 flex items-center justify-center p-8 font-sans">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CardsData.map((card) => {
              return (
                <FeatureCard
                  key={card.id}
                  IconComponent={card.IconComponent}
                  title={card.title}
                  paragraph={card.paragraph}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-12 font-inter">
      <div className="max-w-7xl w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-16 mt-8">
            Our Core Values
         </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Valuecardsdata.map((card) => (
            <ValueCards
              key={card.id}
              index={card.id} 
              IconComponent={card.IconComponent}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </div>
    </div>

   <div className="p-8 md:p-12 bg-gray-50 flex justify-center">

     
      <div className="
        w-full max-w-6xl p-10 md:p-16 rounded-2xl
        bg-linear-to-br from-[#3B82F6] to-[#3B82F6] 
        shadow-2xl flex flex-col items-center
      ">
       
        <p className="
          inline-flex items-center font-semibold tracking-wide
          text-white bg-white/10 px-3 py-1 rounded-full mb-3
        ">
          <span className="mr-1.5 align-middle text-md"></span> Growing Every Day
        </p>

      
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Our Impact
        </h2>

        
        <p className="text-lg text-white mb-10 max-w-md text-center">
          Numbers that showcase our thriving community
        </p>

        {/* Impact Cards Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10
          w-full justify-items-center
        ">
          {impactData.map((data, index) => (
            <ImpactCard
              key={index}
              icon={data.icon}
              statistic={data.statistic}
              label={data.label}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />

    </>
  );
};

export default about;
