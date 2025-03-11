import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-[#f8f2d4] relative overflow-hidden">
      {/* Main Section */}
      <div className="bg-[#252525] rounded-b-[50px] mb-8 py-8">
        <h1 className="text-[#00aeef] text-4xl font-bold text-center">Contact Us</h1>
      </div>

      {/* Form and Circles Section */}
      <div className="container mx-auto flex justify-between items-start py-12 relative z-10">
        {/* Contact Info Section */}
        <div className="w-1/2 space-y-6 z-20">
          <h2 className="text-2xl font-bold">Get in touch with us for furthur assistance</h2>

          <div className="flex items-center space-x-4">
            <Image src="/contact1.png" alt="Sales Office" className="w-12 h-12" />
            <div>
              <p className="font-semibold">Sales Office</p>
              <p># 39-11-3/2, 1st Floor, Above Punjab National Bank of Commerce, Muralinagar, Bank Street, Sector-11, Visakhapatnam - 530007, AP, India.</p>
              <p className="font-semibold">Register Office</p>
              <p>APIIE E Block,Plot No 54,Autonagar,Gajuwaka,
              Visakhapatnam – 530007, AP, India.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image src="/contact2.png" alt="Phone Number" className="w-12 h-12"  />
            
            <div>
              <p className="font-semibold">Phone Number</p>
              <p>+91 9348754999 / +91 8096666686</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image src="/contact3.png" alt="Email Address" className="w-12 h-12" />
            <div>
              <p className="font-semibold">Email Address</p>
              <p>info@classique.co.in / kk@classique.co.in</p>
            </div>
          </div>
        </div>

        {/* Blue Circle Decorations only for Form Section */}
        <div className="relative z-10">
          {/* Form Section */}
          <div
            className="bg-black/80 text-white shadow-lg relative"
            style={{
              width: "450px", // Adjusted width to match the design
              height: "600px", // Adjusted height
              borderRadius: "10px",
              marginLeft: "40px", // Centering the form more
              padding: "24px",
            }}
          >
            <form>
              <div className="space-y-4">
                <Input type="text" placeholder="Your Name" className="bg-white p-3 w-full" />
                <Input type="email" placeholder="Your Email" className="bg-white p-3 w-full" />
                <Input type="text" placeholder="Phone Number" className="bg-white p-3 w-full" />
                <Input type="text" placeholder="Services" className="bg-white p-3 w-full" />
                <textarea
                  placeholder="Message"
                  className="bg-white p-3 w-full h-32 rounded-lg"
                ></textarea>
              </div>
              <button className="bg-[#0275d8] hover:bg-[#0261b0] text-white font-bold py-2 px-4 rounded mt-4 w-full">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Blue Circles - Positioned around the Form */}
          <Image
            src="/round2.png"
            alt="Blue Circle Top Right"
            className="absolute top-[-80px] right-[-50px] w-[220px] h-[220px] -z-1"
          />
          <Image
            src="/round1.png"
            alt="Blue Circle Bottom Left"
            className="absolute bottom-[-50px] left-[-80px] w-[200px] h-[200px] -z-1"
          />
        </div>
      </div>
    </div>
  );
}
