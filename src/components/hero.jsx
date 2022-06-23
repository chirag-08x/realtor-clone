import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import mainImg from "../assets/static/img1.jpg";

const Hero = () => {
  return (
    <Wrapper bcgImg={mainImg}>
      <div className="title">
        <h1>
          To each their home.<sup>sm</sup>{" "}
        </h1>
        <p>Let's find a home that's perfect for you</p>
      </div>

      <div className="btns">
        <button>buy</button>
        <button>rent</button>
        <button>sell</button>
        <button>pre-approval</button>
        <button>just sold</button>
        <button>home value</button>
      </div>

      <div className="form-container">
        <form className="form">
          <input
            type="text"
            placeholder="Address, School, City, Zip or Neighborhood"
          />
          <button type="button">
            <FaSearch />
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  background: url(${(props) => props.bcgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 25rem;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 1rem 0;

  .title {
    color: var(--clr-white);
    text-align: center;
    h1 {
      font-size: 2rem;
      letter-spacing: 1px;
      sup {
        font-family: "Times New Roman", Times, serif;
        text-transform: uppercase;
        font-size: 0.7rem;
      }
      margin-bottom: 0.5rem;
    }
    margin-bottom: 2rem;
  }

  .btns {
    display: flex;
    gap: 0 1rem;
    margin-bottom: 1rem;

    button {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.875rem;

      &:hover {
        border-bottom: 3px solid var(--clr-primary-1);
      }
      &:nth-child(1) {
        border-bottom: 3px solid var(--clr-primary-1);
      }
      &:nth-child(5),
      &:nth-child(6) {
        display: none;
      }
    }
  }

  .form-container {
    width: 60%;
    max-width: 575px;

    .form {
      display: grid;
      align-content: center;
      background-color: white;
      border-radius: 1.7rem;
      padding: 0.2rem 1rem 0.2rem 0.5rem;
      grid-template-columns: 1fr auto;
      background-color: white;
      input {
        border-radius: 1.7rem;
        padding: 1rem;
        border: none;
        outline: none;
        font-size: 1rem;
        font-family: var(--font-primary);
      }

      button {
        color: var(--clr-primary-1);
        display: grid;
        place-items: center;
        font-size: 1.25rem;
        outline: none;
      }
    }
  }

  @media (min-width: 768px) {
    height: 30rem;

    .title {
      h1 {
        font-size: 3.5rem;
      }

      p {
        font-size: 1.3rem;
      }
    }

    .btns {
      button {
        font-size: 1rem;
      }
    }

    .form-container {
      .form {
        input {
          font-size: 1.085rem;
        }
      }
    }
  }
`;
