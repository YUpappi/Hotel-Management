import styled from "styled-components";
// import useDarkMode from "../hooks/useDarkMode";
import PropTypes from "prop-types";

const StyledLogo = styled.div`
  transition: all 0.3s ease;
  cursor: ${(props) => (props.size === "small" ? "pointer" : "default")};
  display: flex;
  justify-content: ${(props) =>
    props.size === "large" ? "center" : "flex-start"};

  @media (max-width: 1024px) {
    overflow: hidden;
    min-width: ${(props) => (props.size === "small" ? "7rem" : "15rem")};
  }
`;

const Img = styled.img`
  width: ${(props) => (props.size === "small" ? "7rem" : "15rem")};

  transition: width 0.3s ease;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: ${(props) => (props.size === "small" ? "7rem" : "15rem")};
  }
`;

function Logo({ size = "large", onClick }) {
  // const { isDarkmode } = useDarkMode();
  const src = "/hotels-logo.png";
  return (
    <StyledLogo size={size}>
      <Img src={src} alt="Logo" size={size} onClick={onClick} />
    </StyledLogo>
  );
}

Logo.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  onClick: PropTypes.func,
};

export default Logo;
