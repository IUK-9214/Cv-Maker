import { useState } from "react";

const Technical = () => {
  const [data, setData] = useState([]);
  const [tech, setTech] = useState("");
  const[show,setshow]=useState(false)

  const handleData = () => {
    if (!tech.trim()) return; // prevent empty entries
    setData([...data, tech]);
    setTech("");
    setshow(!show)
  };

  return (
    <section  className="border-b pb-6 mb-6 px-6  py-4 bg-white rounded-md shadow-sm max-w-3xl mx-auto"> {/* same spacing as Intro */}
      <div className="flex gap-2">
        <h2 className="uppercase text-gray-700 text-lg font-semibold tracking-widest mb-4">
        Technical
      </h2>
      <button 
       className="text-gray-800 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          title={show? "Hide Form" : "Add Skill"}
      onClick={()=>setshow(!show)}>{show ?"×":"+"}</button>
      </div>

      {/* Input and Add button */}
      {show&&(
        <div className="flex gap-2 mb-4 flex-col">
        <input
          value={tech}
          placeholder="Add any tech here"
          type="text"
          name="tech"
          id="tech"
          onChange={(e) => setTech(e.target.value)}
          className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <button
          onClick={handleData}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Add
        </button>
      </div>
      )}

      {/* List of technical skills */}
      <ul className="space-y-2 text-gray-700 text-sm">
        {data.map((tec, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            {tec}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technical;
