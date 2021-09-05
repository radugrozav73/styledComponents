import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

function LinksListComponent({ className }) {
  return (
    <ul className={className}>
      <li className="links">
        <NavLink activeClassName="selected" to="/work">
          Work
        </NavLink>
      </li>
      <li className="links">
        <NavLink activeClassName="selected" to="/services">
          Services
        </NavLink>
      </li>
      <li className="links">
        <NavLink activeClassName="selected" to="/about">
          About Us
        </NavLink>
      </li>
      <li className="links">
        <NavLink activeClassName="selected" to="/insights">
          Insights
        </NavLink>
      </li>
      <li className="contactButton">
        <Link to="/contact">Start a Project</Link>
      </li>
    </ul>
  );
}

const LinksList = styled(LinksListComponent)`
  display: flex;
  list-style: none;

  & .links {
    padding: 10px 20px;
    font-size: 1.4rem;
    letter-spacing: -.5px;
    word-spacing: 0px;
    font-weight: 400;
    text-align: left;
    display: flex;
    align-items: center;

    & a {
      cursor: pointer;
      text-decoration: none;
      color: ${({ colorSwitchOnRoute }) =>
        colorSwitchOnRoute ? "#ffffff" : "#0F2825"};
      position: relative;
      transition: 0.3s ease-in-out;

      ::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        background-color: ${({ colorSwitchOnRoute }) =>
          colorSwitchOnRoute ? "#ffffff" : "#0F2825"};
        bottom: -15px;
        left: 0;
        transition: 0.3s ease-in-out;
      }

      :hover::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: ${({ colorSwitchOnRoute }) =>
          colorSwitchOnRoute ? "#ffffff" : "#0F2825"};
        bottom: -15px;
        transition: 0.3s ease-in-out;
        left: 0;
      }
    }

    .selected {
      ::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: ${({ colorSwitchOnRoute }) =>
          colorSwitchOnRoute ? "#ffffff" : "#0F2825"};
        bottom: -15px;
        transition: 0.3s ease-in-out;
        left: 0;
      }
    }
  }

  .contactButton {
    display: flex;
    justify-content: center;
    margin: 0 40px;

    & a {
      text-decoration: none;
      background-color: ${({ colorSwitchOnRoute }) =>
        colorSwitchOnRoute ? "#ffffff" : "#0F2825"};
      padding: 15px 20px;
      border-radius: 40px;
      color: ${({ colorSwitchOnRoute }) =>
        colorSwitchOnRoute ? "#0F2825" : "#ffffff"};
      font-weight: 500;
      letter-spacing: -1px;
      font-size: 1.2rem;
    }
  }
`;

export default LinksList;
