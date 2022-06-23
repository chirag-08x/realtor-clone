import { data } from "../helper/helper";
import styled from "styled-components";
import priceFormatting from "../helper/prirceFormatting";
import conImg from "../assets/static/img13.jpg";

const Stats = () => {
  return (
    <Wrapper>
      <h3 className="title">new listings in el paso, TX</h3>
      <div className="tiles-wrapper">
        {data.map((item) => {
          const { id, img, name, price, size, lot, address } = item;
          return (
            <article key={id}>
              <figure>
                <img src={img} alt={name} />
              </figure>

              <div className="info">
                <p>{name}</p>
                <h3>{priceFormatting(price)}</h3>
                <div className="size">
                  <h5>
                    {size} <span>sqft.</span>
                  </h5>
                  <h5>
                    {lot} <span>acre lot</span>
                  </h5>
                </div>
                <p>{address}</p>
              </div>
            </article>
          );
        })}
      </div>

      <section className="consulting">
        <figure>
          <img src={conImg} alt="" />
        </figure>

        <div>
          <h1>Let's find the right selling option for you</h1>
          <p>Get your home's value and see selling options</p>
          <button type="button">start exploring</button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Stats;

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  padding: 4rem 0;
  display: grid;
  place-items: center;
  overflow: hidden;

  .title {
    text-transform: capitalize;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .tiles-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 300px));
    gap: 1rem 1rem;
    margin-bottom: 4rem;

    article {
      border-radius: 0.5rem;
      box-shadow: 1px 1px 15px grey;
      figure {
        height: 12rem;
        border-radius: 0.5rem;
        img {
          border-radius: 0.5rem;
        }
      }

      .info {
        text-transform: capitalize;
        line-height: 1.3;
        padding: 1rem;
      }

      .size {
        display: flex;
        gap: 0 1rem;
      }
    }
  }

  .consulting {
    text-align: center;
    width: 100%;
    background-color: var(--clr-grey);

    figure {
      margin-bottom: 1rem;
    }

    div {
      h1 {
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 1rem;
      }

      button {
        margin-bottom: 1rem;
        background-color: var(--clr-primary-1);
        text-transform: capitalize;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    .consulting {
      display: grid;
      grid-template-columns: 1fr 1fr;
      direction: rtl;

      figure {
        margin-bottom: 0;
      }

      div {
        padding: 2rem 0 2rem 0.8rem;
        button {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .consulting {
      div {
        h1 {
          font-size: 1.7rem;
        }
      }
    }

    .tiles-wrapper {
      grid-template-columns: repeat(4, minmax(200px, 300px));
    }
  }
`;
