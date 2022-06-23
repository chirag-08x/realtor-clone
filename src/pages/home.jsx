import { Sidebar, Navbar, Hero, Stats, Trends, Loan } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Navbar />
      <Hero />
      <Stats />
      <Trends />
      <Loan />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main``;
