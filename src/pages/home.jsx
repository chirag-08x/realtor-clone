import {
  Sidebar,
  Navbar,
  Hero,
  Stats,
  Trends,
  Loan,
  Footer,
} from "../components";
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
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main``;
