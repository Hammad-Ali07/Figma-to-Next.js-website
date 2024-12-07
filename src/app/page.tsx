import React from 'react'
import Upperheader, { Header } from './components/header'
import CategoriesSidebar from './components/CategoriesSidebar'
import ProductCard from './components/ProductCard'
import ImageSlider from './components/ImageSlider';
import ProductList from './components/ProductList';
import CountdownStatic from './components/CountdownStatic';


export default function Home() {
  const sliderImages = [
    "/slider1.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
  ];

  

  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[2]17px] h-[344px] pt-9 pl-9 gap-[16px ">
          <CategoriesSidebar />
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-4">
          <ImageSlider images={sliderImages} />
          
        </div>
        
      </div>
      <div className='ml-44 pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className="  left-2 ml-6 font-bold text-red-500 size-13 px-2 py-1 rounded">Today's</span>
      </div>
      <div className='flex'>
      <h2 className="text-5xl  pt-8 ml-4 font-bold mb-3">Flash Sales</h2>
      <CountdownStatic />
      </div>


          <ProductList />
          </div>
    </div>
  );
}
