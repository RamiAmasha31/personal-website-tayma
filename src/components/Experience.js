import React from "react";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa"; // Importing icons from react-icons

const Experience = () => {
  return (
    <div id="experience" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Tutor */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start w-[500px]">
            <FaChalkboardTeacher className="text-9xl text-blue-500 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">
                Teaching Assistant - University of Haifa <br />
                (2020 - Present)
              </h3>
              <p className="mt-2">
                {" "}
                Conducted weekly lessons to train students in fundamental
                concepts and practical exercises in C programming language.
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Experience;
