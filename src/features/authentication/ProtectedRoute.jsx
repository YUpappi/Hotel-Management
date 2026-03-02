import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  justify-content: center;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
