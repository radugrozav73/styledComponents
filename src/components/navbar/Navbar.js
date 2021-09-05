import styled from "styled-components";
import LinkList from "./LinksList";
import { useRouteMatch } from "react-router-dom";
import GlobalStyle from "../../GlobalStyles";
import { H2 } from "../styledcomponents/headings.style";

function NavbarComponent({ className }) {
  const onServiceRoute = useRouteMatch("/services") ? true : false;

  return (
    <nav className={className}>
      <div>
        <H2 onServiceRoute={onServiceRoute }>Balkan Bros.</H2>
        <LinkList onServiceRoute={onServiceRoute} />
        <GlobalStyle onServiceRoute={onServiceRoute} />
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
    width: 90%;
    height: 100%;
  }
`;

export default Navbar;
