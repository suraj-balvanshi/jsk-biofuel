import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function PerfectContactInfoGrid() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="container mx-auto px-6 bg-white">
        <div className="mb-8 text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            Get in touch with us
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Email */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6" />
              <div className="ml-4 text-xl">Email</div>
            </div>
            <p className="leading-loose text-gray-500">info@jskbiofuel.com</p>
          </div>

          {/* Phone */}
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <Phone className="h-6 w-6" />
              <div className="ml-4 text-xl">Phone</div>
            </div>
            <p className="leading-loose text-gray-500">+91 999-999-9999</p>
          </div>

          {/* Address */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6" />
              <div className="ml-4 text-xl">Address</div>
            </div>
            <p className="leading-loose text-gray-500">
              E-3196/7, E Block Market Road, Rajajipuram, Lucknow - 226017. U.P.
              India
            </p>
          </div>

          {/* Facebook */}
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <Facebook className="h-6 w-6" />
              <div className="ml-4 text-xl">Facebook</div>
            </div>
            <p className="leading-loose text-gray-500">@jskbiofuel</p>
          </div>

          {/* Twitter */}
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <Twitter className="h-6 w-6" />
              <div className="ml-4 text-xl">Twitter</div>
            </div>
            <p className="leading-loose text-gray-500">@jskbiofuel</p>
          </div>

          {/* LinkedIn */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <Linkedin className="h-6 w-6" />
              <div className="ml-4 text-xl">LinkedIn</div>
            </div>
            <p className="leading-loose text-gray-500">
              linkedin.com/company/jskbiofuel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
