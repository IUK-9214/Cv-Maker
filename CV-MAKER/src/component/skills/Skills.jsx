import React, { useState } from 'react';
import Skill from './Skill';

const Skills = () => {
  const [addskill, setaddskill] = useState([

  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newSkill = { title, adddescription: description };
    setaddskill([...addskill, newSkill]);
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <section className="border-b pt-6 pb-6 mt-6 mb-6 px-6 py-4 bg-white rounded-md shadow-sm max-w-3xl mx-auto"> {/* margin bottom added to match Intro/Profile */}
      <div className="flex items-center p-2 gap-2 mb-4">
        <h2 className="uppercase text-gray-700 text-lg font-semibold tracking-widest">
          Skills
        </h2>

        {/* plus button using text "+" */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-gray-800 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          title={showForm ? "Hide Form" : "Add Skill"}
        >
          {showForm ? "×" : "+"}
        </button>
      </div>

      {/* Conditional form display */}
      {showForm && (
        <form onSubmit={handleAddSkill} className="mb-5 space-y-3"> {/* spacing between inputs slightly increased */}
          <input
            type="text"
            placeholder="Skill Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <textarea
            placeholder="Skill Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            rows="2"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Add Skill
          </button>
        </form>
      )}

      {/* skill cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
        {addskill.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            description={skill.adddescription}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
