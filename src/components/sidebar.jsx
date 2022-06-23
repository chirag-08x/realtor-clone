import styled from "styled-components";
import { FaBars, FaUserAlt } from "react-icons/fa";
import logo from "../assets/svgs/svg4.svg";

const Sidebar = () => {
  return (
    <Wrapper>
      <section className="wrapper">
        <div className="toggle-btn">
          <button>
            <FaBars />
          </button>
        </div>
        <div className="logo">
          <img src={logo} alt="Realtor.com" />
        </div>
        <div className="user">
          <button>
            <FaUserAlt />
          </button>
        </div>
      </section>

      <section></section>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  .wrapper {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggle-btn {
      button {
        background: transparent;
        border: none;
        font-size: 1.3rem;
      }
    }

    .logo {
      img {
        width: 10rem;
      }
    }

    .user {
      button {
        background: transparent;
        border: none;
        font-size: 1.3rem;
        color: white;
        background-color: var(--clr-primary-1);
        border-radius: 50%;
        display: grid;
        place-items: center;
        padding: 0.5rem;
      }
      padding: 0.1rem;

      &:hover {
        border-bottom: 2px solid var(--clr-primary-1);
      }
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
