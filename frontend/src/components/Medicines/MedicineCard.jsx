import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MedicineCard = ({ medicine, index }) => {
  const { id, name, description, dosage, packSize, photo, manufacturer, price } = medicine;

  return (
    <div className="py-5 px-4 bg-white border rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
        />
        <h2 className="text-xl font-bold text-headingColor mt-2 text-center">{name}</h2>
        <p className="text-base text-textColor mt-1 text-center">Description: {description}</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-800 mb-2">Dosage: {dosage}</p>
        <p className="text-sm text-gray-800 mb-2">Pack Size: {packSize}</p>
        <p className="text-sm text-gray-800 mb-2">Manufacturer: {manufacturer}</p>
        <p className="text-sm text-gray-800 mb-2">Price: {price}</p>
        <p className="text-sm text-gray-800 mb-2">ID: {id}</p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <Link
          to="/details"
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

export default MedicineCard;
