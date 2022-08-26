import styled from "styled-components";

const BannerMainContainer = styled.section`
  margin: 100px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  /* background-color: rebeccapurple; */
  padding: 0;
  
  .left {
    font-family: "Poppins";
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* padding-left: 5%; */
    flex-direction: column;
    gap: 21px;

    h1 {
      font-weight: 500;
      font-size: 64px;
      line-height: 77px;
    }

    small {
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
    }

    .buttons {
      display: flex;
      gap: 13px;
      /* justify-content: space-between; */
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

        .text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          white-space: nowrap;

          .smallT {
            font-size: 10px;
          }

          .text2 {
            font-weight: 700;
          }
        }
      }
    }
  }

  .right {
    /* background: url(bon-vivant-qom5MPOER-I-unsplash.jpg); */
    border-radius: 400px;
    display: flex;
    justify-content: center;

    img {
      width: 80%;
      /* height: 80%; */
      justify-self: center;
      align-self: center;
    }
  }
`;

export default BannerMainContainer;
