import styled from "styled-components";

const ContactContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 150px;
  margin-top: 150px;

  .left {
    display: flex;
    flex-direction: column;
    gap: 32px;

    h2 {
      font-size: 36px;
      line-height: 37px;
      font-weight: 700;
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 33px;
    }
  }

  .right {
    display: flex;
    justify-content: end;
    align-items: center;

    div {
      display: flex;
      gap: 8px;

      @media screen and (max-width: 550px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        text-align: center;
      }

      input {
        width: 299px;
        outline: none;
        height: 51px;
        padding-left: 10px;
        background: #f7f7f7;
        border: 1px solid #b3b3b3;
        border-radius: 5px;
      }

      button {
        width: 182px;
        height: 51px;
        background-color: #fbddbb;
      }
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    text-align: center;
  }
`;
export default ContactContainer;
