import { Sidebar, Navbar, Hero } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Navbar />
      <Hero />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main``;
