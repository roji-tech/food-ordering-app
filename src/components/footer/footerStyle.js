import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #0b0d17;
  height: 393px;
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
    justify-content: space-between;
  }

  .bottom {
    padding: 28px 0;
    width: 100%;
    height: 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export default FooterStyle;
