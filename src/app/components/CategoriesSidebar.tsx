import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const CategoriesSidebar = () => {
  const categories = [
   
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="pt-[40px]  pl-[165px]   ">
    <div className=" w-[317px] h-[1444px]  ">
      <h2 className="text-lg  mb-4 flex">Women's Fashion<FaGreaterThan className="font-light mx-4 pt-2"/>
      </h2>
      <h2 className="text-lg  mb-4 flex">Men 's' Fashion <FaGreaterThan className="font-light  mx-4 pt-2"/></h2>

      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="hover:text-blue-600 cursor-pointer text-gray-700"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CategoriesSidebar;
