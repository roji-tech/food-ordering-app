import styled from "styled-components";

const BannerMainContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  background-color: rebeccapurple;

  .left {
    font-family: "Poppins";

    h1 {
      font-weight: 500;
      font-size: 64px;
      line-height: 77px;
    }
    small {
      font-weight: 400;
      font-size: 18px;
      line-height: 33px;
    }
  }

  .right {
    /* background: url(bon-vivant-qom5MPOER-I-unsplash.jpg); */
    border-radius: 400px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default BannerMainContainer;
