import styled from "styled-components";

const NavbarContainer = styled.div`
  box-sizing: border-box;
  padding: 50px 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;

  .logo {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    place-items: center;
    gap: 22px;

    p {
      font-weight: 700px;
      font-size: 36px;
    }
  }

  nav {
    list-style-type: none;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    gap: 45px;
    font-weight: 500;
    font-size: 21px;
  }

  .S_button {
    font-size: 17px;
    font-weight: 700;
    color: #00302e;
    width: 142px;
    height: 53px;
    background: #e2b887;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    padding: 35px 0px;

    .logo {
      display: flex;
      /* justify-content: center;
    align-items: center; */
      gap: 15px;

      p {
        font-weight: 700px;
        font-size: 28px;
      }
    }

    nav {
      background-color: rgba(0, 0, 0, 0.3);
      padding: 15px;
      position: absolute;
      flex-direction: column;
      /* justify-content: space-between; */
      align-items: center;
      gap: 45px;
      top: 120px;
      opacity: 1;
      transition: opacity 0.3s ease-out;
      border-radius: 20px;
      right: ${({ isOpen }) => (isOpen ? "0" : "-165px")};
    }
  }
`;

export default NavbarContainer;

export const Hambuger = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  gap: 6px;
  background-color: black;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  z-index: 11;

  div {
    cursor: pointer;
    width: 30px;
    height: 2px;
    background-color: white;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;
