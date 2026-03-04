import React, { useState } from "react";
import b1 from "../src/images/b1.avif";
import b2 from "../src/images/b2.avif";
import b3 from "../src/images/b3.avif";
import b4 from "../src/images/b4.avif";
import b5 from "../src/images/b1.avif";


function Product() {
 const images = [b1, b2, b3, b4, b5];


  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-6xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 gap-10 p-8">

        {/* Image Section */}
        <div>

          {/* Main Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={mainImage}
              className="w-full h-[420px] object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-5 gap-3 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer rounded-lg border transition transform hover:scale-110 
                ${mainImage === img ? "border-black border-2" : "border-gray-300"}`}
              />
            ))}
          </div>

        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-3">
            1200ML Stainless Steel Tumbler
          </h1>

          <p className="text-gray-500 mb-5 leading-relaxed">
            Leak proof insulated tumbler with handle and straw. Keeps drinks
            hot or cold for hours. Perfect for gym, office and travel.
          </p>

          {/* Price */}
          <p className="text-4xl text-green-600 font-bold mb-6 animate-pulse">
            ₹999
          </p>

          {/* CTA Button */}
          <button className="bg-black text-white py-4 rounded-xl text-lg font-semibold
          hover:bg-gray-800 transition transform hover:scale-105 shadow-lg">
            Order Now
          </button>

          {/* Extra Selling Points */}
          <div className="flex gap-6 mt-6 text-sm text-gray-600">
            <p>🚚 Free Delivery</p>
            <p>💳 Cash On Delivery</p>
            <p>⭐ 4.5 Rating</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Product;