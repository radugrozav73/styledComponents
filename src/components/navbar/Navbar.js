import styled from "styled-components";
import LinkList from "./LinksList";
import { useLocation, useHistory } from "react-router-dom";
import GlobalStyle from "../../GlobalStyles";
import { H2Logo } from "../styledcomponents/headings.style";
import { useLayoutEffect, useState } from "react";

function NavbarComponent({ className }) {
  const location = useLocation();
  const history = useHistory();

  const [pagePositionColor, setPagePositionColor] = useState(true);

  let colorSwitchOnRoute =
    location.pathname === "/" || location.pathname === "/services"
      ? true
      : false;

  const changeLocation = () => history.push("/");

  const changeBackground = () => {
    if (window.scrollY === 0) {
      return;
    }
    if (window.scrollY > 3400 && pagePositionColor) {
      setPagePositionColor(false);
    } else if (
      (location.pathname === "/" || location.pathname === "/services") &&
      window.scrollY < 3400 &&
      !pagePositionColor
    ) {
      setPagePositionColor(true);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <nav className={className}>
      <div>
        <H2Logo
          onClick={changeLocation}
          colorSwitchOnRoute={
            pagePositionColor ? colorSwitchOnRoute : pagePositionColor
          }
        >
          Balkan Bros.
        </H2Logo>
        <LinkList
          colorSwitchOnRoute={
            pagePositionColor ? colorSwitchOnRoute : pagePositionColor
          }
        />
        <GlobalStyle
          colorSwitchOnRoute={
            pagePositionColor ? colorSwitchOnRoute : pagePositionColor
          }
        />
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
