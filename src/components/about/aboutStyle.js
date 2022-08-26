import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: 80px 0;

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 33px;
  }

  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    /* or 183% */

    text-align: center;

    color: rgba(255, 255, 255, 0.83);
  }
`;

export default AboutStyle;
