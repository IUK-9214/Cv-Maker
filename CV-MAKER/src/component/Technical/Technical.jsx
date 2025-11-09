

const Technical = () => {
  return (
    <section className="border-t pt-5">
      <h2 className="uppercase text-gray-700 text-lg font-semibold tracking-widest mb-4">
        Technical
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600">
        <ul className="space-y-1 text-sm">
          <li>XHTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>

        <ul className="space-y-1 text-sm">
          <li>JQuery</li>
          <li>PHP</li>
          <li>CVS / Subversion</li>
        </ul>

        <ul className="space-y-1 text-sm">
          <li>OS X</li>
          <li>Windows XP/Vista</li>
          <li>Linux</li>
        </ul>
      </div>
    </section>
  );
};

export default Technical