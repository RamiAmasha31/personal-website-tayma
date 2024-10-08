import React from "react";
import { FaBook, FaUniversity } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faLaptopCode,
  faBrain,
  faServer,
  faCogs,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div id="education" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* B.Sc. Software Engineering */}
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-start w-[350px]">
            <FaUniversity className="text-3xl text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg text-center">
              B.Sc. Information Systems Specializing in AI - University of Haifa
              (2021 - 2024)
            </h3>
            <p className="mt-2 font-bold text-center">Grade: 89.60</p>
          </div>

          {/* Bagrut Diploma */}
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-start w-[350px]">
            <FaBook className="text-3xl text-green-500 mb-4" />
            <h3 className="font-semibold text-lg text-center">
              Bagrut Diploma - Massada High School (2017 - 2020)
            </h3>
            <p className="mt-2 font-bold text-center">Grade: 113.5</p>
          </div>
        </div>

        {/* Important Courses Section */}
        <div className="mt-10 mx-4 md:mx-20">
          <h3 className="text-xl font-bold text-center mb-4">
            Important Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Cards */}
            <CourseCard
              icon={faLaptopCode}
              title="OOP (Java)"
              grade="95"
              color="text-blue-500"
            />
            <CourseCard
              icon={faDatabase}
              title="Database Systems"
              grade="100"
              color="text-green-500"
            />
            <CourseCard
              icon={faCode}
              title="Intro to CS (C)"
              grade="89"
              color="text-red-500"
            />
            <CourseCard
              icon={faCogs}
              title="Data Structures"
              grade="85"
              color="text-yellow-500"
            />
            <CourseCard
              icon={faServer}
              title="Software Engineering"
              grade="89"
              color="text-purple-500"
            />
            <CourseCard
              icon={faCogs}
              title="Hardware & OS"
              grade="84"
              color="text-gray-500"
            />
            <CourseCard
              icon={faDatabase}
              title="Big Data"
              grade="97"
              color="text-indigo-500"
            />
            <CourseCard
              icon={faBrain}
              title="Intro to AI"
              grade="97"
              color="text-pink-500"
            />
            <CourseCard
              icon={faBrain}
              title="Machine Learning"
              grade="98"
              color="text-teal-500"
            />
            <CourseCard
              icon={faNetworkWired}
              title="Data Communication"
              grade="81"
              color="text-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// CourseCard component to display individual courses in a grid
const CourseCard = ({ icon, title, grade, color }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center w-full shadow-md">
      <FontAwesomeIcon icon={icon} className={`text-3xl ${color} mr-4`} />
      <div className="flex flex-col">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="font-bold">Grade: {grade}</p>
      </div>
    </div>
  );
};

export default Education;
