import Image from "next/image";
import Link from "next/link";
import { CompanyCarousel } from "./components/CompanyCarousel";
import { UniversityCarousel } from "./components/UniversityCarousel";
import { FaTelegram, FaYoutube, FaInstagram } from "react-icons/fa";
import Globe from "./components/Globe";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 leading-tight">
          Welcome to{" "}
          <span className="whitespace-nowrap bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FFB700] bg-clip-text text-transparent font-bold">
            Lang Apex
          </span>{" "}
          Alumni Network{" "}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Connecting generations of Lang Apex graduates, fostering lifelong
          relationships, and celebrating our shared success stories.
        </p>
      </div>

      {/* Featured Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Alumni Directory */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Alumni Directory</h2>
          <p className="text-gray-600 mb-4">
            Connect with fellow graduates and expand your professional network.
          </p>
          <Link
            href="/alumni"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Browse Directory →
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <p className="text-gray-600 mb-4">
            Stay connected with alumni events, reunions, and networking
            opportunities.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View Events →
          </Link>
        </div>

        {/* Alumni Gallery */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Alumni Gallery</h2>
          <p className="text-gray-600 mb-4">
            Check out our alumni gallery to see what our graduates are up to.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View Gallery →
          </Link>
        </div>
      </div>

      {/* University Carousel */}
      <UniversityCarousel />

      {/* Company Carousel */}
      <CompanyCarousel />

      {/* Globe */}
      <Globe />

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with our vibrant community on Telegram and stay updated with
          our latest content on YouTube.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/+G_ZxTznhMZw5NGUy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0088cc] hover:bg-[#0077b3] gap-2"
          >
            <FaTelegram className="w-5 h-5" />
            Join Alumni Community
          </a>
          <a
            href="https://t.me/LangapexDombitNamangan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0088cc] hover:bg-[#0077b3] gap-2"
          >
            <FaTelegram className="w-5 h-5" />
            Official Channel
          </a>
          <a
            href="https://www.youtube.com/@LangApexDombit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF0000] hover:bg-[#CC0000] gap-2"
          >
            <FaYoutube className="w-5 h-5" />
            YouTube Channel
          </a>
          <a
            href="https://www.instagram.com/langapex_dombit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#E1306C] hover:bg-[#C13584] gap-2"
          >
            <FaInstagram className="w-5 h-5" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
