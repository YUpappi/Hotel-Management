// import styled from "styled-components";
// import ButtonIcon from "./ButtonIcon";
// import { HiOutlineUser } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";

// const StyledHeaderMenu = styled.div`
//   display: flex;
//   gap: 0.4rem;
// `;

// function HeaderMenu() {
//   const navigate = useNavigate();
//   return (
//     <StyledHeaderMenu onClick={() => navigate("/account")}>
//       <ButtonIcon>
//         <HiOutlineUser />
//       </ButtonIcon>
//     </StyledHeaderMenu>
//   );
// }

// export default HeaderMenu;

import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi";
import Modal from "./Modal";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function HeaderMenu() {
  return (
    <Modal>
      <Modal.Open opens="account-menu">
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
      </Modal.Open>

      <>
        <Modal.Window name="account-menu">
          <UpdateUserDataForm />
        </Modal.Window>
        {/* 
        <Row type="vertical">
          <div>
            <Heading as="h3">Update password</Heading>
          </div>
          <p>Update user password form</p>
        </Row> */}
      </>
    </Modal>
  );
}

export default HeaderMenu;
