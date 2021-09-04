import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import LinkList from "./LinkList";

function NavbarComponent({ className }) {
  const path = useRouteMatch("/services");

  console.log(path)
  return (
    <nav className={className}>
      <div>
        <h2>Balkan Bros.</h2>
        <LinkList color={path ? "#ffffff" : "#0f2825"} />
      </div>
    </nav>
  );
}

const Navbar = styled(NavbarComponent)`
  height: 160px;
  width: 100%;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    color: #0f2825;
    font-size: 1.8rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
  }
`;

export default Navbar;
