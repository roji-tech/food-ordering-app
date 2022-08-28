import styled from "styled-components";

const RegisterContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255);
  background-color: whitesmoke;

  #main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 55% 45%;
  }

  div {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    * {
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .image {
    padding: 0;
    margin: 0;
    overflow-y: hidden;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    place-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    /* display: grid; */
    /* place-content: center; */

    form {
      box-sizing: border-box;
      width: 100%;
      padding: 15% 15%;
      display: flex;
      flex-direction: column;
      gap: 45px;
      /* background: magenta; */

      input {
        padding: 15px;
        outline: none;
        background: rgba(255, 255, 255, 0.83);
        border: 1px solid rgba(251, 221, 187, 0.51);
        border-radius: 5px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 33px;
      }

      button,
      input {
        /* width: 100%; */
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 40px;
        gap: 10px;
        background: #00302e;
        border-radius: 5px;
        font-family: "Rubik";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #fbddbb;
      }

      .external {
        a {
          text-decoration: none;
          color: inherit;
          font-weight: 600;
        }

        display: flex;
        justify-content: center;
        margin-top: -10px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 33px;
        text-align: center;

        color: rgba(0, 48, 46, 0.91);

        p {
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

export default RegisterContainer;
