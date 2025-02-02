import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/">
            <Image src="/shsGPS-logo.jpg" alt="Logo" width={50} height={30} />
          </Link>
          <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
            </li>
            <li>
              <Link href="/grades" className="hover:text-blue-600 transition">Grades</Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-blue-600 transition">Contacts</Link>
            </li>
          </ul>
          <Link href="/signup" className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
