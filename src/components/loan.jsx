import styled from "styled-components";
import img1 from "../assets/static/img4.jpg";
import img2 from "../assets/static/img5.jpg";

const Loan = () => {
  return (
    <Wrapper>
      <figure>
        <img src={img2} alt="" />
      </figure>
      <article>
        <h1>need a home loan ? get pre-approved</h1>
        <p>
          Find a lender who can offer competitive mortgage rates and help you
          with pre-approval.
        </p>
        <button type="button">get pre-approved now</button>
      </article>

      <article>
        <h1>get local info</h1>
        <p>
          Does it have pet-friendly rentals? How are the schools? Get important
          local information on the area you're most interested in.
        </p>
      </article>
      <figure>
        <img src={img1} alt="" />
      </figure>
    </Wrapper>
  );
};

export default Loan;

const Wrapper = styled.section`
  display: none;
  padding-top: 2rem;
  background-color: #cccccc;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px 500px;

    article {
      background-color: var(--clr-white);
      display: grid;
      align-content: center;
      padding: 0 3rem;
      text-transform: capitalize;

      h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }

      button {
        background-color: var(--clr-primary-1);
        padding: 0.7rem 1rem;
        text-transform: capitalize;
        font-size: 1rem;
        border-radius: 1.2rem;
        letter-spacing: 1px;
        width: 15rem;
      }
    }
  }
`;
