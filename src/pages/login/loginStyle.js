import styled from "styled-components";

const LoginStyle = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100vw;
  height: 100vh;
  background-color: rebeccapurple;

  #main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 55% 45%;
  }

  div {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    * {
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .image {
    background-color: inherit;
    padding: 0;
    margin: 0;
    overflow-y: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .form {
    display: grid;
    place-content: center;

    form {
      display: grid;
      place-content: center;
      /* width: fit-content; */
      background-color: yellow;
      display: flex;
      flex-direction: column;
      background: #ccc;

      input {
        padding: 10px;
        outline: none;
        background: rgba(255, 255, 255, 0.83);
        border: 1px solid rgba(251, 221, 187, 0.51);
        border-radius: 5px;
      }

      button,
      input {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

export default LoginStyle;
