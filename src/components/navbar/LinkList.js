import styled from "styled-components";
import { Link } from "react-router-dom";
function LinkListComponent({ className }) {
  return (
    <ul className={className}>
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
  );
}

const LinkList = styled(LinkListComponent)`
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
      color: ${({color}) => color};
      position: relative;
      transition: .3s ease-in-out;

      ::after{
        content: '';
        position:absolute;
        height:2px;
        width:0;
        background-color: ${({color}) => color};
        bottom: -5px;
        left:0;
        transition: .3s ease-out;
      }

      :hover::after{
        content: '';
        position:absolute;
        height:2px;
        width:100%;
        background-color: ${({color}) => color};
        bottom: -5px;
        transition: .3s ease-out;
        left:0;
      }
      ::active{
        content: '';
        position:absolute;
        height:2px;
        width:100%;
        background-color: ${({color}) => color};
        bottom: -5px;
        transition: .3s ease-out;
        left:0;
      }
    }
  }
`;

export default LinkList;
