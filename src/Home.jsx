import React from "react";
import ProductGallery from "../src/ProductGallery";
import ProductDetails from "../src/ProductDetails";
import OrderForm from "../src/OrderForm";

function Home() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-8 bg-white mt-8 rounded-2xl shadow">

      <ProductGallery />

      <div>
        <ProductDetails />
        <OrderForm />
      </div>

    </div>
  );
}

export default Home;