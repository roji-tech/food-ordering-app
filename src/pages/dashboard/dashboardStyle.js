import styled from "styled-components";

const DashboardStyle = styled.section`
  padding: 0;
  margin: 0;
  /* background-color: teal; */
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  justify-content: space-between;
  /* background: rgba(255, 255, 255, 0.83); */

  .left {
    background-color: whitesmoke;
    background: #fbfbfb;
    height: 99vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 50%;
    gap: 15%;
    transition: all 0.4s ease-in-out;

    .top {
      display: flex;
      place-content: center;
      place-items: center;
      gap: 19px;

      h3 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 33px;
        line-height: 50px;
        letter-spacing: 0.05em;
        color: #00302e;
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 18px;

      .link {
        position: relative;
        width: 267px;
        height: 50px;
        width: 85%;
        /* background-color: red; */
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: start;
        padding-left: 12px;
        border-radius: 12px;
        cursor: pointer;

        .text {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 1em;
          line-height: 24px;
          color: #000000;
        }

        .box {
          position: absolute;
          top: 50%;
          right: 2%;
          box-sizing: border-box;
          background-color: #f3c294;
          border: 1px solid #06e775;
          border-radius: 5px;
          justify-self: center;
          padding: 2px 7px;
          transform: translateY(-50%);

          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          /* identical to box height */

          color: #000000;
        }

        .orderBox {
          background: #06e775;
        }
      }

      .dashboard {
        background: #efefef;
      }
    }

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: row;
      padding: 0;
      height: max-content;
    }
  }

  .right {
    padding-left: 6%;
    padding-top: 13%;
    display: flex;
    flex-direction: column;
    gap: 53px;

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 23px;
      line-height: 33px;
      /* identical to box height, or 143% */
      color: #00302e;
    }

    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 33px;
      /* identical to box height, or 236% */
      text-align: center;
      color: rgba(0, 0, 0, 0.69);
    }

    .boxes {
      display: flex;
      flex-wrap: wrap;
      gap: 118px;
      justify-content: center;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    /* flex-direction: column; */

    .left {
      background-color: rgba(0, 0, 0, 0.7);
      position: fixed;
      left: ${({ isOpen }) => (isOpen ? "0" : "-55%")};
      height: 100%;
      height: 100vh;
      width: max-content;
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 30px;
      padding-top: 15%;
      gap: 15%;

      h3 {
        color: whitesmoke !important;
      }

      .link {
        color: whitesmoke;

        .text {
          color: whitesmoke !important;
        }
      }

      .dashboard {
        background-color: gray !important;
      }
    }
  }
`;

export default DashboardStyle;

export const Hambuger = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: fit-content;
  background-color: black;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  padding: 15px;
  z-index: 11;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotateX(${({ isOpen }) => (isOpen ? "95deg" : "0deg")});
    transition: all 0.4s;
    gap: 5px;
    cursor: pointer;

    div {
      cursor: pointer;
      width: 25px;
      height: 2px;
      background-color: white;
    }
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;
