import { FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function PerfectFooter() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4">JSK Biofuels</h4>
          <p>
            Explore how biofuel is transforming the world of renewable energy
            and reducing carbon emissions.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/products/biodiesel" className="hover:text-gray-300">
                Biodiesel
              </a>
            </li>
            <li>
              <a href="/products/glycerin" className="hover:text-gray-300">
                Glycerin
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-gray-300">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:info@jskbiofuel.com"
                className="hover:text-gray-300"
              >
                info@jskbiofuel.com
              </a>
            </li>
            <li>
              <a href="tel:+919839571751" className="hover:text-gray-300">
                +91 9839571751
              </a>
              <br />
              <a href="tel:+919415564333" className="hover:text-gray-300">
                +91 9415564333
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <div className="hover:text-blue-400">
              <FaLinkedin className="h-6 w-6" />
              <p>@jskbiofuel</p>
            </div>
            <div className="hover:text-pink-500">
              <FaTwitter className="h-6 w-6" />
              <p>@jskbiofuel</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2025 JSK Biofuels All rights reserved.</p>
      </div>
    </div>
  );
}
