import PropTypes from "prop-types";

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-gray-400">
        {links.map((link) => (
          <li key={link} className="hover:text-[#b8860b] cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FooterLinks;

FooterLinks.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string),
};
