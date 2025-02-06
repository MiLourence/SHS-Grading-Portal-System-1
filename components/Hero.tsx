"use client";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center text-white" style={{ backgroundImage: "url('/Background.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Left Arrow */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-4xl hover:opacity-70 transition">
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-4xl hover:opacity-70 transition">
        <FaChevronRight />
      </button>

      {/* Content */}
      <div className="relative z-10 px-1 ml-36 max-w-2xl text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to the <span className="text-blue-400">Senior High School Grading Portal</span>
        </h1>
        <p className="mt-4 text-lg">
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
