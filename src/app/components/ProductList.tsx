'use client'
import React, { useRef } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  // Create a ref to the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll left by a fixed amount
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll the container 300px to the left
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right by a fixed amount
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll the container 300px to the right
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="py-6 w-full">

      {/* Arrow buttons for scrolling positioned above the product list */}
      <div className="flex justify-end mb-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded shadow mx-2"
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded shadow mx-2"
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>

      {/* Horizontal scroll container with hidden scrollbar */}
      <div
        ref={scrollContainerRef} // Attach the ref to the scroll container
        className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide"
        style={{ maxWidth: "100%", overflowY: "hidden", scrollbarWidth: "none" }} // Hide the vertical scrollbar and ensure it fits
      >
        <div className="flex flex-nowrap space-x-4">
          {/* 5 visible product cards */}
          <ProductCard
            image="https://via.placeholder.com/150"
            name="Gaming Mouse"
            price={49.99}
            oldPrice={69.99}
            reviews={85}
          />
          <ProductCard
            image="https://via.placeholder.com/150"
            name="Mechanical Keyboard"
            price={89.99}
            oldPrice={109.99}
            reviews={120}
          />
          <ProductCard
            image="https://via.placeholder.com/150"
            name="Gaming Monitor"
            price={379.99}
            oldPrice={499.99}
            reviews={95}
          />
          <ProductCard
            image="https://via.placeholder.com/150"
            name="Comfort Chair"
            price={149.99}
            oldPrice={199.99}
            reviews={65}
          />
          <ProductCard
            image="https://via.placeholder.com/150"
            name="LED Desk Lamp"
            price={39.99}
            oldPrice={59.99}
            reviews={45}
          />
        </div>

        {/* Additional products */}
        <div className="flex flex-nowrap space-x-4">
          <ProductCard
            image="https://via.placeholder.com/150"
            name="Wireless Headset"
            price={69.99}
            oldPrice={89.99}
            reviews={75}
          />
          <ProductCard
            image="https://via.placeholder.com/150"
            name="Gaming Chair"
            price={249.99}
            oldPrice={299.99}
            reviews={45}
          />
          {/* More products can be added dynamically as needed */}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductList;
