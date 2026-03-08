import FooterLinks from "./FooterLinks";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiMap, HiPhone } from "react-icons/hi";
import Logo from "../../ui/Logo";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="mt-20 bg-gray-950 py-16">
        <div className="w-[90%] mx-auto grid md:grid-cols-5 gap-12 text-xl">
          <div>
            <Logo size="small" />

            <p className="mt-4 text-gray-400">
              Experience royal hospitality in the heart of Bihar. Where luxury
              meets tradition.
            </p>
          </div>

          <FooterLinks
            title="Quick Links"
            links={["Home", "About Us", "Rooms", "Experiences", "Offers"]}
          />

          <FooterLinks
            title="Our Services"
            links={["Membership", "Weddings", "Meetings", "Booking", "Contact"]}
          />

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="flex items-center gap-2 text-gray-400">
              <HiPhone size={14} /> +91 1234 567 890
            </p>
            <p className="flex items-center gap-2 text-gray-400 mt-2">
              <HiMail size={14} /> info@baruttpalace.com
            </p>
            <p className="flex items-center gap-2 text-gray-400 mt-2">
              <HiMap size={14} /> Patna, Bihar, India
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-gray-400">
              <FaFacebook size={18} />
              <FaTwitter size={18} />
              <FaInstagram size={18} />
              <FaLinkedin size={18} />
            </div>
            <p className="mt-4 text-gray-400">
              Stay connected with us for exclusive offers and updates.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
