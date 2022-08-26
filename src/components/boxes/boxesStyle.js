import styled from "styled-components";

const BoxesStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 3rem;
  margin-bottom: 100px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

export default BoxesStyle;
