import React from "react";

function ProductDetails() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-3">
        1200ML Stainless Steel Tumbler
      </h2>

      <p className="text-gray-500 mb-4">
        Leak proof insulated tumbler with handle and straw.
      </p>

      <p className="text-4xl text-green-600 font-bold mb-6">
        ₹999
      </p>

      <div className="flex gap-6 text-sm mb-6">
        <span>🚚 Free Delivery</span>
        <span>💳 Cash On Delivery</span>
        <span>⭐ 4.5 Rating</span>
      </div>
    </div>
  );
}

export default ProductDetails;