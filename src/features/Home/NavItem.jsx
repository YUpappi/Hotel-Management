import PropTypes from "prop-types";

function NavItem({ icon, text, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 cursor-pointer transition ${
        isActive ? "text-[#b8860b]" : "text-dark hover:text-[#b8860b]"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}

export default NavItem;

NavItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};
