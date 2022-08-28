import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #0b0d17;
  min-height: 393px;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  * {
    list-style-type: none;
  }

  .top {
    padding: 0 10%;
    display: flex;
    /* justify-content: space-between; */
    gap: 80px;
    flex-wrap: wrap;

    div {
      display: flex;
      /* justify-content: center; */
      flex-direction: column;
      align-items: center;

      gap: 12px;

      li {
        width: 255px;
        height: 24px;
      }

      h3 {
        width: 255px;
        height: 24px;
        font-size: 18px;
        font-weight: 700;
        padding: 0;
        margin: 0;
        margin-bottom: 12px;
      }

      .but {
        justify-self: start;
        align-self: flex-start;
        width: fit-content;
        height: fit-content;

        @media screen and (max-width: 800px) {
          align-self: center;
        }

        * {
          box-sizing: border-box;
        }

        button {
          padding: 6px 10px;
          min-width: 135px;
          max-width: 135px;
          height: 40px;
          border-radius: 10px;
          display: grid;
          grid-template-columns: 30% 70%;
          background-color: black;
          color: white;
          align-content: center;
          justify-content: space-between;
          place-items: center;
          place-content: center;

          .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            white-space: nowrap;
            gap: 0;

            .smallT {
              font-size: 9px;
            }

            .text2 {
              font-size: 15px;
              font-weight: 700;
            }
          }
        }
      }
    }

    @media screen and (max-width: 800px) {
      flex-wrap: wrap;
      padding-bottom: 15px;
      justify-content: center;

      div {
        h3,
        li {
          text-align: center;
        }
      }
    }
  }

  .bottom {
    padding: 28px 12%;
    width: 100%;
    height: 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    gap: 20px;

    .icons {
      display: flex;
      gap: 32px;

      li {
        display: flex;
        align-items: center;
        place-content: center;
        background: rgba(255, 255, 255, 0.1);
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }

    @media screen and (max-width: 800px) {
      height: max-content;
      flex-wrap: wrap;
      padding-bottom: 10px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 800px) {
    height: fit-content;
  }
`;

export default FooterStyle;
