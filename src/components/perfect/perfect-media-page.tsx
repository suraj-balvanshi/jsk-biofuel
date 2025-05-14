import Image from "next/image";
import PerfectYoutubeEmbed from "./perfect-youtube-embed";
export default function PerfectMediaPage() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-bold m-4 text-center">Media Page</h2>
      <div>
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-4xl font-bold text-center mb-8">
            Inaugration Album
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* <!-- Large item --> */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (1).JPG"
                alt="Nature"
                className="w-full h-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">
                    Ceremonial Groundbreaking of JSK Biofuel Plant
                  </h4>
                </div>
              </div>
            </div>

            {/* <!-- Two small items --> */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (2).JPG"
                alt="Food"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">
                    Office Blessing Ritual
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (3).JPG"
                alt="Technology"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">
                    Machine Inauguration Ceremony
                  </h4>
                </div>
              </div>
            </div>

            {/* <!-- Three medium items --> */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (4).JPG"
                alt="Travel"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">
                    Welcoming the Guest of Honor
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (5).JPG"
                alt="Art"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">
                    Ritual Offering by Female Guests
                  </h4>
                </div>
              </div>
            </div>

            {/* <!-- bottom cards --> */}

            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (6).JPG"
                alt="Sport"
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">
                    MVPs Posing After Ceremony
                  </h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (7).JPG"
                alt="Sport"
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">
                    Team and Family at the Ritual
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-4xl font-bold text-center mb-8">Site</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* <!-- Large item --> */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (1).JPG"
                alt="Nature"
                className="w-full h-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 1</h4>
                </div>
              </div>
            </div>

            {/* <!-- Two small items --> */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (2).JPG"
                alt="Food"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 2</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (3).JPG"
                alt="Technology"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 3</h4>
                </div>
              </div>
            </div>

            {/* <!-- Three medium items --> */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (4).JPG"
                alt="Travel"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 4</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (5).JPG"
                alt="Art"
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 5</h4>
                </div>
              </div>
            </div>

            {/* <!-- bottom cards --> */}

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (6).JPG"
                alt="Sport"
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 6</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (7).JPG"
                alt="Sport"
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 7</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (8).JPG"
                alt="Sport"
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100  transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white">Site Image 8</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-0">
        <h3 className="text-4xl font-bold text-center mb-4">Youtube Media</h3>
        <PerfectYoutubeEmbed />
      </div>
    </div>
  );
}
