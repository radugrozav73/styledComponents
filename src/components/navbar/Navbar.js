import styled from "styled-components";
import LinkList from "./LinksList";
import { useLocation, useHistory } from "react-router-dom";
import GlobalStyle from "../../GlobalStyles";
import { H2Logo } from "../styledcomponents/headings.style";

function NavbarComponent({ className }) {
  const location = useLocation();
  const colorSwitchOnRoute =
    location.pathname === "/" || location.pathname === "/services"
      ? true
      : false;

  const history = useHistory();

  const changeLocation = () => history.push("/");

  return (
    <nav className={className}>
      <div>
        <H2Logo
          onClick={changeLocation}
          colorSwitchOnRoute={colorSwitchOnRoute}
        >
          Balkan Bros.
        </H2Logo>
        <LinkList colorSwitchOnRoute={colorSwitchOnRoute} />
        <GlobalStyle colorSwitchOnRoute={colorSwitchOnRoute} />
      </div>
    </nav>
  );
}

const Navbar = styled(NavbarComponent)`
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;
  }
`;

export default Navbar;
