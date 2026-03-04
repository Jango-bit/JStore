import React, { useState } from "react";
import b1 from "../src/images/b1.avif";
import b2 from "../src/images/b2.avif";
import b3 from "../src/images/b3.avif";
import b4 from "../src/images/b4.avif";
import b5 from "../src/images/b1.avif";
function ProductGallery() {
 const images = [b1, b2, b3, b4, b5];

 const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">

      {/* Main Image */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src={mainImage}
          className="w-full h-[420px] object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3">

        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setMainImage(img)}
            className={`cursor-pointer rounded-lg overflow-hidden border 
            transition transform hover:scale-110 hover:shadow-md
            ${mainImage === img ? "border-black border-2" : "border-gray-300"}`}
          >
            <img src={img} className="h-20 w-full object-cover" />
          </div>
        ))}

      </div>

    </div>
  );
}

export default ProductGallery;