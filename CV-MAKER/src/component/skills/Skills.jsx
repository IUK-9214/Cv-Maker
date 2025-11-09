import React from 'react'

const Skills = () => {
  return (
    <section className="border-t pt-5">
      <h2 className="uppercase text-gray-700 text-lg font-semibold tracking-widest mb-4">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-600">
        <div>
          <h3 className="text-gray-800 font-semibold mb-1">Web Design</h3>
          <p className="text-sm">
            Assertively exploit wireless initiatives rather than synergistic core competencies.
          </p>
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold mb-1">Interface Design</h3>
          <p className="text-sm">
            Credibly streamline mission-critical value with multifunctional functionalities.
          </p>
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold mb-1">Project Direction</h3>
          <p className="text-sm">
            Proven ability to lead and manage a wide variety of design and development projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills