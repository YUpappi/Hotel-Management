import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import {
  HiOutlineCalendar,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 1024px) {
    gap: 0.4rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
    flex-shrink: 0;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  & span {
    white-space: nowrap;
    transition:
      opacity 0.3s ease,
      width 0.3s ease;
  }

  @media (max-width: 1024px) {
    padding: 1.2rem 0.8rem;
    gap: 0.3rem;
    justify-content: center;

    & span {
      opacity: 0;
      width: 0;
      overflow: hidden;
      display: none;
    }
  }
`;
function MainNav() {
  return (
    <>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">
              <HiOutlineHome />
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/bookings">
              <HiOutlineCalendar />
              <span>Bookings</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cabins">
              <HiOutlineHomeModern />
              <span>Cabins</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/users">
              <HiOutlineUser />
              <span>Users</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/settings">
              <HiOutlineCog6Tooth />
              <span>Settings</span>
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
      <Logout />
    </>
  );
}

export default MainNav;
