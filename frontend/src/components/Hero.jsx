function Hero() {
  return (
    <section
      id="home"
      className="bg-blue-50 min-h-[80vh] flex items-center leading-tight"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Understand Yourself Before Choosing Your Career
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          Career Clarity Assessment for Students, Parents and Professionals.
          Discover your strengths, interests, aptitude and career pathways.
        </p>
      <p className="text-lg font-medium text-gray-700 mt-6 mb-8">
  Professional Career Assessment & Guidance
  <span className="text-blue-600 font-bold"> Starting at ₹499</span>
</p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block"
          >
           
            Book Assessment
          </a>
          <a
            href="/Sample_Report.pdf"
            download
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
          >
            Download Sample Report
          </a>{" "}
        </div>
      </div>
    </section>
  );
}

export default Hero;
