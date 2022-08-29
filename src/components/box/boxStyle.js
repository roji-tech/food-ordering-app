import styled from "styled-components";

const BoxStyle = styled.div`
  width: 240px;
  height: 307px;
  padding-top: 47px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  align-content: center;
  /* justify-content: center; */
  /* justify-content: center; */

  background: rgba(255, 255, 255, 0.83);
  border: 0.3px solid rgba(0, 48, 46, 0.14);
  border-radius: 5px;

  img {
    width: 90px;
    height: 90px;
    border-radius: 400px;
    margin: 0 68px;
  }

  h3 {
    margin: 0 55px;
    /* width: 113px;
    height: 33px; */
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 33px;
    color: #00302e;
    /* background: yellow; */
    padding: 5px;
  }

  small {
    box-sizing: border-box;
    padding: 5px 34px;
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 12px;
    /* or 191% */
    text-align: center;
    display: flex;
    justify-content: center;
    color: rgba(0, 0, 0, 0.69);
  }

  .pricing {
    margin-top: 22px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 56px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 33px;
    justify-self: center;
    align-self: flex-end;
    color: #00302e;
    padding: 5px 0;
  }
`;

export default BoxStyle;
