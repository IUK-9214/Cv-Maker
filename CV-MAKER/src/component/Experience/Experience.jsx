import React from 'react'

const Experience = () => {
  return (
    <section className="border-t pt-5">
      <h2 className="uppercase text-gray-700 text-lg font-semibold tracking-widest mb-4">
        Experience
      </h2>

      <div className="space-y-6 text-gray-600">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Facebook</h3>
            <span className="text-sm text-gray-500">2005–2007</span>
          </div>
          <p className="italic text-gray-700 text-sm mb-1">Senior Interface Designer</p>
          <p className="text-sm">
            Intrinsically enable optimal core competencies through corporate relationships.
            Implement worldwide portals and client-focused imperatives.
            Conveniently initiate virtual paradigms and top-line convergence.
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Apple Inc.</h3>
            <span className="text-sm text-gray-500">2005–2007</span>
          </div>
          <p className="italic text-gray-700 text-sm mb-1">Junior Interface Designer</p>
          <p className="text-sm">
            Progressively re-conceptualize multifunctional “outside the box” thinking through
            inexpensive methods of empowerment. Morph extensive niche markets with
            mission-critical ideas. Deliver bricks-and-clicks strategic themes rather than scalable
            benefits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience