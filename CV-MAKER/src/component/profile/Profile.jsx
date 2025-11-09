import React, { useState } from "react";

const Profile = () => {
  const [addtext, setaddtext] = useState("");

  return (
    <section className="border-t pt-6 pb-4 bg-white rounded-md shadow-sm max-w-3xl mx-auto px-6 mt-6">
      <h2 className="uppercase text-gray-700 text-lg font-semibold tracking-widest mb-3 text-center">
        Profile
      </h2>

      <div className="flex flex-col items-center">
        <textarea
          value={addtext}
          onChange={(e) => setaddtext(e.target.value)}
          className="w-full sm:w-3/4 border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-700 leading-relaxed p-2 rounded-md"
          name="text"
          id="text"
          placeholder="Write your career objective or summary here..."
          rows={4}
        ></textarea>
      </div>
    </section>
  );
};

export default Profile;
