import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyleBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2rem;
  border-radius: 1px solid var(--color-grey-100);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  grid-row: 1/-1;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  width: 20rem;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  position: relative;
  z-index: 100;

  @media (max-width: 1024px) {
    width: 8rem;
    padding: 3.2rem 1rem;
    background-color: var(--color-grey-0);

    &:hover {
      width: 20rem;
      background-color: var(--color-grey-0);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &:hover span {
      opacity: 1;
      width: auto;
      display: inline;
    }
  }
`;

const Sidebar = () => {
  return (
    <StyleBar>
      <Logo />
      <MainNav />
    </StyleBar>
  );
};

export default Sidebar;
