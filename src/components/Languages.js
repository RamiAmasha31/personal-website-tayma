import React from "react";
import {
  FaLanguage,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaPuzzlePiece,
  FaLinux,
  FaDatabase,
  FaCoffee, // Java icon
  FaCode, // C and C# icon
  FaServer, // TCP/UDP servers icon
} from "react-icons/fa"; // Importing necessary icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Importing star icons

const LanguagesAndSkills = () => {
  // Function to generate star ratings
  const renderStars = (count) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) =>
          index < count ? (
            <AiFillStar key={index} className="text-yellow-500" />
          ) : (
            <AiOutlineStar key={index} className="text-gray-300" />
          )
        )}
      </div>
    );
  };

  return (
    <div id="languages" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Languages & Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Languages Section */}
          <div className="flex flex-col w-full max-w-[400px] bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg text-center">Languages</h3>
            <div className="mt-4 space-y-4">
              {["Arabic", "English", "Hebrew"].map((language, index) => (
                <div className="flex items-center" key={language}>
                  <FaLanguage className="text-3xl text-blue-500 mr-4" />
                  <div className="text-left">
                    <h4 className="font-semibold">{language}</h4>
                    {renderStars(index === 0 ? 5 : 5)}{" "}
                    {/* Adjust proficiency */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col w-full max-w-[800px] bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg text-center">Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                {
                  icon: <FaJava className="text-3xl text-red-500 mr-4" />,
                  label: "Java",
                },
                {
                  icon: <FaCode className="text-3xl text-black mr-4" />,
                  label: "OOP",
                },
                {
                  icon: <FaPython className="text-3xl text-blue-500 mr-4" />,
                  label: "Python",
                },
                {
                  icon: <FaCode className="text-3xl text-black mr-4" />,
                  label: "C",
                },
                {
                  icon: <FaCode className="text-3xl text-black mr-4" />,
                  label: "C#",
                },
                {
                  icon: <FaDatabase className="text-3xl text-green-500 mr-4" />,
                  label: "MySQL",
                },
                {
                  icon: <FaLinux className="text-3xl text-black mr-4" />,
                  label: "Linux/Ubuntu",
                },
                {
                  icon: <FaServer className="text-3xl text-gray-700 mr-4" />,
                  label: "TCP/UDP Servers",
                },
                {
                  icon: (
                    <FaPuzzlePiece className="text-3xl text-purple-500 mr-4" />
                  ),
                  label: "Design Patterns",
                },
              ].map(({ icon, label }) => (
                <div className="flex items-center" key={label}>
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesAndSkills;
