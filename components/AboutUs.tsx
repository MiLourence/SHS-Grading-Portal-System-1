const AboutUs = () => {
    return (
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center text-white px-6 text-center bg-[#007bff]"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-8">
            About Us
          </h2>
          <p className="text-xl leading-relaxed text-justify">
            Welcome to the <strong>Senior High School Grading Portal</strong>, a modern and efficient online platform designed
            to simplify the grading process for students, teachers, and school administrators. Our system is built to
            ensure accuracy, transparency, and accessibility, making it easier for schools to manage academic records
            in a secure and organized manner.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  