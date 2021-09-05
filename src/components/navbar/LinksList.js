import styled from "styled-components";
import { NavLink } from "react-router-dom";

function LinksListComponent({ className }) {
  return (
    <ul className={className}>
      <li>
        <NavLink activeClassName="selected" to="/work">
          Work
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/about">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/insights">
          Insights
        </NavLink>
      </li>
    </ul>
  );
}

const LinksList = styled(LinksListComponent)`
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
      text-decoration: none;
      color: ${({ colorSwitchOnServiceRoute }) =>
        colorSwitchOnServiceRoute ? "#ffffff" : "#0F2825"};
      position: relative;
      transition: 0.3s ease-in-out;

      ::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        background-color: ${({ colorSwitchOnServiceRoute }) =>
          colorSwitchOnServiceRoute ? "#ffffff" : "#0F2825"};
        bottom: -5px;
        left: 0;
        transition: 0.3s ease-in-out;
      }

      :hover::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: ${({ colorSwitchOnServiceRoute }) =>
          colorSwitchOnServiceRoute ? "#ffffff" : "#0F2825"};
        bottom: -5px;
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
        background-color: ${({ colorSwitchOnServiceRoute }) =>
          colorSwitchOnServiceRoute ? "#ffffff" : "#0F2825"};
        bottom: -5px;
        transition: 0.3s ease-in-out;
        left: 0;
      }
    }
  }
`;

export default LinksList;
