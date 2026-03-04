import React, { useState } from "react";

function OrderForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Order 🛒

Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Pincode: ${formData.pincode}

Product: 1200ML Stainless Steel Tumbler
Price: ₹999
`;

    const whatsappURL =
      "https://wa.me/917356179857?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow">

      <h3 className="text-xl font-bold mb-4">
        Place Order
      </h3>

      <form className="space-y-3" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
        >
          Order Now
        </button>

      </form>

    </div>
  );
}

export default OrderForm;