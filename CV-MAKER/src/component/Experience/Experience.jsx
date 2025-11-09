import React, { useState } from "react";
import Experi from "./Experi";

const Experience = () => {
  const [data, setdata] = useState([]);
  const [formdata, setformdata] = useState({
    company: "",
    date: "",
    position: "",
    description: "",
  });

  const [show, setshow] = useState(false);

  const handledata = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleclick = (e) => {
    e.preventDefault();
    if (!formdata.company || !formdata.position) return; // basic validation

    setdata([...data, formdata]);
    setshow(false);
    setformdata({
      company: "",
      date: "",
      position: "",
      description: "",
    });
  };

  return (
    <section className="border-t pt-8  pb-6 mt-8 max-w-3xl mx-auto bg-white rounded-lg shadow-sm px-6">
      <div className="flex  items-center  gap-2 mb-4">
        <h2 className="uppercase text-gray-800 text-lg font-semibold tracking-widest">
          Experience
        </h2>
        <button
          onClick={() => setshow(!show)}
          className="text-gray-800 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          title={show ? "Hide Form" : "Add Experience"}
        >
          {show ? "−" : "+"}
        </button>
      </div>

      {show && (
        <form
          onSubmit={handleclick}
          className="space-y-4 border border-gray-200 rounded-md p-4 mb-6"
        >
          <div className="flex justify-between items-center gap-4">
            <input
              value={formdata.company}
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handledata}
              className="w-1/2 border border-gray-300 p-2 rounded text-gray-800"
            />
            <input
              value={formdata.date}
              type="text"
              name="date"
              placeholder="Duration"
              onChange={handledata}
              className="w-1/2 border border-gray-300 p-2 rounded text-gray-600 text-sm"
            />
          </div>

          <input
            value={formdata.position}
            type="text"
            name="position"
            placeholder="Your Role / Position"
            onChange={handledata}
            className="w-full border border-gray-300 p-2 rounded text-gray-700 italic"
          />

          <textarea
            value={formdata.description}
            name="description"
            placeholder="Describe your work and key achievements..."
            rows={4}
            onChange={handledata}
            className="w-full border border-gray-300 p-2 rounded text-gray-600 text-sm"
          ></textarea>

          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
          >
            Add
          </button>
        </form>
      )}

      <div className="space-y-6 text-gray-700">
        {data.map((exp, index) => (
          <Experi
            key={index}
            company={exp.company}
            date={exp.date}
            position={exp.position}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
