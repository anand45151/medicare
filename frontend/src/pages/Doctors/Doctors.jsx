import React from 'react';
import DoctorList from '../../components/Doctors/DoctorList';
const Doctors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Doctors</h1>
      <DoctorList />
    </div>
  );
};

export default Doctors;
