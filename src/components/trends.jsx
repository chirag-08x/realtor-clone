import styled from "styled-components";

const Trends = () => {
  return (
    <Wrapper className="trends">
      <p>trends</p>
      <h2>top 10 Best-and Cheapest-Cities for LGBTQ homebuyers, 2022</h2>
      <button>read more</button>
    </Wrapper>
  );
};

export default Trends;

const Wrapper = styled.section`
  height: 22rem;
  display: grid;
  justify-items: center;
  align-content: center;
  color: white;
  text-transform: capitalize;
  letter-spacing: 1px;

  p {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    max-width: 25rem;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    background-color: var(--clr-primary-1);
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    font-size: 1rem;
    border-radius: 1rem;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    height: 30rem;

    h2 {
      font-size: 2rem;
      max-width: 30rem;
    }
  }
`;
