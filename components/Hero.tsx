import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/Background.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to the <span className="text-blue-400">Senior High School Grading Portal</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Easily track your grades, manage academic records, and ensure transparency in the grading process.
          Our system simplifies grading for students, teachers, and administrators.
        </p>
        <Link href="/get-started" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
