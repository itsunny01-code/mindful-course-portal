import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1e2d52] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Explore Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-gray-300">MAARG</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Career Counselling</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Testimonials</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Become A Counselor</Link></li>
            </ul>
          </div>

          {/* Quick Link 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Courses</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Certifications</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Training</Link></li>
            </ul>
          </div>

          {/* Quick Link 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-gray-300">Marketing</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Certified</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Become A Trainer</Link></li>
              <li><Link to="/" className="hover:text-gray-300">About us</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Contact us</Link></li>
            </ul>
          </div>

          {/* Quick Link 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-gray-300">Trainers</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Relationship counseling</Link></li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Address</h3>
            <div className="space-y-4">
              <p>8, Gokhale Residency 1,</p>
              <p>Survey No. 125, Near DSK</p>
              <p>Vishwa, Dhayari,</p>
              <p>Sinhagad Road, Pune - 411041</p>
              <div className="mt-6 space-y-2">
                <p>+91 7558 483 424</p>
                <p>+91 92844 00935</p>
              </div>
              <p className="mt-4">enquiry@endorphin.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <p>© 2022 All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Youtube size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;