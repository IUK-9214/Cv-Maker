import { useState } from "react";

const Intro = () => {
  const [introdata, Setintrodata] = useState({
    username: "",
    role: "",
    email: "",
    phone_no: "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    Setintrodata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <header className="border-b pb-6 mb-6 px-6 py-4 bg-white rounded-md shadow-sm max-w-3xl mx-auto">
      {/* Name and Role Section */}
      <div className="flex flex-col items-center text-center space-y-3 mb-6">
        <input
          value={introdata.username}
          className="text-3xl font-bold text-gray-900 border-b border-gray-300 focus:outline-none text-center w-full sm:w-3/4"
          type="text"
          name="username"
          placeholder="Enter Name"
          required
          onChange={handleinput}
        />

        <input
          value={introdata.role}
          className="text-lg italic text-gray-600 border-b border-gray-200 focus:outline-none text-center w-full sm:w-3/4"
          type="text"
          name="role"
          placeholder="Enter Role / Position"
          required
          onChange={handleinput}
        />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
          <input
            value={introdata.email}
            className="border-b border-gray-300 focus:outline-none text-gray-700 w-full sm:w-64 py-1"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            onChange={handleinput}
          />

          <input
            value={introdata.phone_no}
            className="border-b border-gray-300 focus:outline-none text-gray-700 w-full sm:w-48 py-1"
            type="text"
            name="phone_no"
            placeholder="Enter Phone Number"
            required
            onChange={handleinput}
          />
        </div>

       
      </div>
    </header>
  );
};

export default Intro;
