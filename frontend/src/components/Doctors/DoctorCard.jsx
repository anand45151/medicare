import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor, index }) => {
  const { name, specialty, avgRating, totalRating, photo, totalPatients, hospital } = doctor;

  return (
    <div className="py-5 px-4 bg-white border rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
        />
        <h2 className="text-xl font-bold text-headingColor mt-2 text-center">{name}</h2>
        <p className="text-base text-textColor mt-1 text-center">{specialty}</p>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-center mb-2">
          <span className="text-sm text-gray-600">Rating:</span>
          <div className="flex items-center ml-2">
            <span className="text-sm text-yellow-500">{avgRating}</span>
            <svg
              className="w-4 h-4 text-yellow-500 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3.07l1.97 4.72a.5.5 0 0 0 .46.31l5.05.14c.55.02.78.73.36 1.09l-3.8 3.3 1.2 5.1c.13.54-.45 1.01-.91.69L10 15.36l-4.93 2.69c-.46.25-1.05-.15-.91-.69l1.2-5.1-3.8-3.3c-.42-.36-.19-1.07.36-1.09l5.05-.14 1.97-4.72a.5.5 0 0 1 .94 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm text-gray-600 ml-1">({totalRating} reviews)</span>
          </div>
        </div>
        <p className="text-sm text-textColor">
          Patients: {totalPatients}
        </p>
        <p className="text-sm text-textColor">
          Hospital: {hospital}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <Link
          to="/doctors"
          className="w-10 h-10 rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-6" />
        </Link>

        <span
          className="px-3 py-1 text-sm font-semibold rounded-l-lg"
          style={{
            background: "#f5f5f5",
            color: "#333",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default DoctorCard;
