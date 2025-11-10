

import Intro from "./component/Intro/Intro";
import Profile from "./component/profile/Profile";
import Experience from "./component/Experience/Experience";
import Skills from "./component/skills/Skills";
import Technical from "./component/Technical/Technical";

function App() {
  
  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
          
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Download CV
          </button>
        </div>
        {/* Resume Content */}
        <div
          className="bg-white p-6 rounded-lg shadow-md"
          style={{ color: "#000", backgroundColor: "#fff" }} // ensures PDF-safe colors
        >
          <Intro />
          <Profile />
          <Experience />
          <Skills />
          <Technical />
        </div>
      </div>
    </main>
  );
}

export default App;
