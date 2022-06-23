import React from "react";
import styled from "styled-components";
import logo from "../assets/svgs/svg4.svg";
import { navlinks } from "../helper/helper";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Realtor.com" />
        </div>

        <div className="nav-links">
          {navlinks.map((item) => {
            const { id, text, redirect } = item;
            return (
              <a key={id} href={redirect}>
                {text}
              </a>
            );
          })}
        </div>

        <div className="nav-btns">
          <button>log in</button>
          <button>sign up</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: none;
  @media (min-width: 992px) {
    display: initial;
    .nav-container {
      width: 90vw;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      margin: 0 auto;
      place-items: center;
      padding: 1rem 0;

      .logo {
        width: 11rem;
      }

      .nav-links {
        display: flex;
        gap: 0 1rem;
        justify-content: center;
        align-items: center;

        a {
          text-transform: capitalize;
          color: var(--clr-black);
          font-size: 1rem;

          &:hover {
            color: var(--clr-primary-1);
            transition: var(--main-transition);
          }
        }
      }

      .nav-btns {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 1rem;

        button {
          background: transparent;
          border: none;
          text-transform: capitalize;
          font-size: 1rem;

          &:nth-child(2) {
            background-color: var(--clr-primary-1);
            color: var(--clr-white);
            border-radius: 1rem;
            padding: 0.5rem 1rem;
          }
        }
      }
    }
  }
`;
