import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyleBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2rem;
  border-radius: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
`;
const Sidebar = () => {
  return (
    <StyleBar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyleBar>
  );
};

export default Sidebar;
