import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Explore Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/maarg" className="hover:text-gray-300">MAARG</Link></li>
              <li><Link to="/career-counselling" className="hover:text-gray-300">Career Counselling</Link></li>
              <li><Link to="/testimonials" className="hover:text-gray-300">Testimonials</Link></li>
              <li><Link to="/become-counselor" className="hover:text-gray-300">Become A Counselor</Link></li>
            </ul>
          </div>

          {/* Quick Link 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
              <li><Link to="/certifications" className="hover:text-gray-300">Certifications</Link></li>
              <li><Link to="/training" className="hover:text-gray-300">Training</Link></li>
            </ul>
          </div>

          {/* Quick Link 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link to="/marketing" className="hover:text-gray-300">Marketing</Link></li>
              <li><Link to="/certified" className="hover:text-gray-300">Certified</Link></li>
              <li><Link to="/become-trainer" className="hover:text-gray-300">Become A Trainer</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact us</Link></li>
            </ul>
          </div>

          {/* Quick Link 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link to="/trainers" className="hover:text-gray-300">Trainers</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="/relationship-counseling" className="hover:text-gray-300">Relationship counseling</Link></li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Address</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <p>8, Gokhale Residency 1, Survey No. 125, Near DSK Vishwa, Dhayari, Sinhagad Road, Pune - 411041</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <div>
                  <p>+91 7558 483 424</p>
                  <p>+91 92844 00935</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <p>enquiry@endorphin.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex justify-between items-center">
          <p>© 2022 All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;