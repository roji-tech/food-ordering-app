import styled from "styled-components";

const DashboardStyle = styled.section`
  padding: 0;
  margin: 0;
  background-color: teal;
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
          right: 5%;
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
`;

export default DashboardStyle;
