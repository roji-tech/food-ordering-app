import styled from "styled-components";

const CartStyle = styled.div`
  position: absolute;
  top: ${({ show }) => (show ? "0" : "-105%")};
  bottom: ${({ show }) => (show ? "0" : "100%")};
  left: ${({ show }) => (show ? "0" : "-100%")};
  right: ${({ show }) => (show ? "0" : "100%")};
  /* inset:  ${({ show }) => (show ? "0" : "100%")}; */
  background-color: rgba(196, 196, 196, 0.42);
  display: grid;
  grid-template-columns: 1fr 1.3fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 0fr 1fr;
  }

  #main {
    padding-left: 7%;
    padding-top: 7%;
    background-color: #ffffff;

    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 33px;
      color: #00302e;
      margin-bottom: 24px;
    }

    .list {
      .grid {
        display: grid;
        grid-template-columns: 5fr 1fr 3fr 3fr;
        text-align: center;

        @media screen and (max-width: 600px) {
          grid-template-columns: 3fr 1fr 3fr 3fr;
        }
      }

      .header {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.69);
        margin-bottom: 30px;

        li {
          padding: 6px;
        }

        .to_left {
          text-align: left !important;
          padding-top: 0 !important;
        }
      }

      .items {
        display: flex;
        flex-direction: column;
        gap: 50px;

        ul {
          li {
            display: flex;
            align-items: center;
            gap: 15px;

            div.name {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              font-family: "Poppins";
              font-style: normal;
              font-weight: 600;
              font-size: 17px;
              color: #00302e;

              small {
                font-family: "Poppins";
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 20px;
                color: #c92c33;
              }
              @media screen and (max-width: 600px) {
                align-items: center;
              }
            }
          }

          .title {
            @media screen and (max-width: 600px) {
              display: flex;
              flex-direction: column;
              place-content: center;
              place-items: center;
            }
          }

          .quantity {
            padding-right: 20%;
            font-family: "Poppins";
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 33px;
            color: #00302e;
            text-align: end;
            display: flex;
            justify-content: end;
            align-items: center;
          }

          .price {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 33px;
            color: #00302e;
            display: flex;
            place-content: center;
            place-items: center;
          }
        }
      }
    }

    .total {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        width: 100%;

        .calc {
            align-self: flex-end;
            display: flex;
            gap:26px;

            .name {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 33px;
                color: rgba(0, 0, 0, 0.69);
            }

            .amount {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 21px;
                line-height: 33px;
                color: #00302E;
            }
        }

        .buttonT {
            margin-top: 30px;
            align-self: center;
            width: 479px;
            height: 60px;
            background: #00302E;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 27px;
            text-align: center;
            color: #F3C294;
        }
    }
  }
`;

export default CartStyle;
