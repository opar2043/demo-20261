import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-transparent w-full md:w-10/12 mx-auto text-[#8E9AA5] px-4 md:px-12 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Gaming</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Casino</li>
            <li className="hover:text-white cursor-pointer">Slots</li>
            <li className="hover:text-white cursor-pointer">Crash</li>
            <li className="hover:text-white cursor-pointer">Table</li>
            <li className="hover:text-white cursor-pointer">Fishing</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Baji</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              About Us <FiExternalLink className="text-xs" />
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              Privacy Policy <FiExternalLink className="text-xs" />
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              Terms & Conditions <FiExternalLink className="text-xs" />
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              Responsible Gaming <FiExternalLink className="text-xs" />
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              KYC <FiExternalLink className="text-xs" />
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Promotions</li>
            <li className="hover:text-white cursor-pointer">VIP Club</li>
            <li className="hover:text-white cursor-pointer">Referral</li>
            <li className="hover:text-white cursor-pointer">Brand Ambassadors</li>
            <li className="hover:text-white cursor-pointer">App Download</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              BJ Forum <FiExternalLink className="text-xs" />
            </li>
            <li className="hover:text-white cursor-pointer">Customer Support</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Baji. All rights reserved.
        </p>

        {/* Bottom Right Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#141515] flex items-center justify-center text-red-500 font-bold">
            bj
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
