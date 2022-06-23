import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPinterestSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import logo1 from "../assets/svgs/svg2.svg";
import logo2 from "../assets/svgs/svg3.svg";

const Footer = () => {
  return (
    <Wrapper>
      <article className="social">
        <div className="icons">
          <button>
            <FaFacebookSquare />
          </button>
          <button>
            <FaTwitterSquare />
          </button>
          <button>
            <FaLinkedin />
          </button>
          <button>
            <FaInstagramSquare />
          </button>
          <button>
            <FaPinterestSquare />
          </button>
          <button>
            <FaYoutubeSquare />
          </button>
        </div>

        <div className="logos">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
        </div>
      </article>

      <article className="copyright">
        <p>
          &copy; 1995-${new Date().getFullYear}{" "}
          <span> national association of realtors.</span> All rights reserved.
        </p>
      </article>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: var(--clr-grey-2);
  padding: 2rem 1rem;
  border-top: 3px solid var(--clr-white);

  display: grid;
  place-items: center;

  .social {
    margin-bottom: 1rem;
    .icons {
      margin-bottom: 1rem;
      display: flex;
      gap: 0 1rem;

      button {
        font-size: 2rem;
      }
    }

    .logos {
      display: flex;
      justify-content: center;
      gap: 0 1rem;

      img {
        width: 7rem;
        border-radius: 0.5rem;
        padding: 0.5rem;
      }

      * {
        background-color: var(--clr-white);
      }
    }
  }

  .copyright {
    color: var(--clr-white);
    text-align: center;
    span {
      text-transform: capitalize;
      text-decoration: underline;
    }
  }
`;
