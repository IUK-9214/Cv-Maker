

const Skill = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-2"> {/* gap increased slightly to match Intro/Profile spacing */}
      <h3 className="text-gray-900 font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Skill;
