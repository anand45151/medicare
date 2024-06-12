import React from 'react';
import { medicines } from '../../assets/data/medicine';
import MedicineCard from './MedicineCard';

const MedicineList = () => {
  console.log(medicines); 
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {medicines.map(medicine => (
        <MedicineCard key={medicine.id} medicine={medicine} />
      ))}
    </div>
  );
};

export default MedicineList;
