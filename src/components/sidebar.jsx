import styled from "styled-components";
import { FaBars, FaUserAlt, FaTimes, FaAngleDown } from "react-icons/fa";
import logo from "../assets/svgs/svg4.svg";
import { navlinks } from "../helper/helper";
import gicon from "../assets/svgs/svg5.svg";
import { useState } from "react";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    if (openSidebar) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };

  return (
    <Wrapper>
      <section className="wrapper">
        <div className="toggle-btn">
          <button onClick={toggleSidebar}>
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

      {openSidebar && (
        <section className="toggle-sidebar">
          <div className="container">
            <button onClick={toggleSidebar}>
              <FaTimes />
            </button>
            {navlinks.map((item) => {
              const { id, text, redirect } = item;
              return (
                <div key={id} className="sidebar-link">
                  <a href={redirect}>{text}</a>
                  <FaAngleDown />
                </div>
              );
            })}
            <div className="download">
              <h3>find homes on the go!</h3>
              <figure>
                <img src={gicon} alt="" />
              </figure>
            </div>
          </div>
        </section>
      )}
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
        color: var(--clr-black);
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

  .toggle-sidebar {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    .container {
      width: 16rem;
      background-color: var(--clr-white);
      height: 100%;
      display: grid;
      align-content: start;

      button {
        padding: 1rem;
        color: red;
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
      }

      .sidebar-link {
        padding: 1rem 1rem;
        border-bottom: 1px solid black;
        text-transform: capitalize;

        a {
          color: var(--clr-black);
        }

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .download {
        margin-top: 2rem;
        padding: 1rem;

        h3 {
          font-size: 1rem;
          text-transform: capitalize;
          margin-bottom: 0.5rem;
        }

        figure {
          width: 9rem;
        }
      }
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
