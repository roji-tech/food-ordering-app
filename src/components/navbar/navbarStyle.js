import styled from "styled-components";

const NavbarContainer = styled.div`
  /* top: 73px; */
  box-sizing: border-box;
  padding: 50px 98px;
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
`;

export default NavbarContainer;
