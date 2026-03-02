import styled from "styled-components";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  width: 100%;
`;

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <StyledDashboard>
          <Heading as="h1">Dashboard</Heading>
          <DashboardFilter />
        </StyledDashboard>
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
