import { Link } from "react-router-dom";
import styled from "styled-components";

function NavbarComponent({ className }) {
  return (
    <nav className={className}>
      <div>
        <h2>salut eu</h2>
        <ul>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const Navbar = styled(NavbarComponent)`
  height: 100px;
  width: 100%;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;

    & ul {
      display: flex;
      list-style: none;

      & li {
        padding: 10px;
        font-size: 1.4rem;
        letter-spacing: 1px;
        word-spacing: 0px;
        font-weight: 300;
        text-align: left;

        & a {
          cursor: pointer;
          text-decoration:none;
          color:black;
        }
      }
    }
  }
`;

export default Navbar;
