import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    text-align: center;
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr auto 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(3) {
      --rotate: 1deg;
    }
    &:nth-child(5) {
      --rotate: -2deg;
    }
    &:nth-child(6) {
      --rotate: 1deg;
    }
    &:nth-child(7) {
      --rotate: -.52deg;
  }
  &:hover {
    --rotate: 3deg;
  }
  a {
    font-size: 2.5rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    /* &[aria-current="page"] {
      color: var(--red);
    } */
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/burgers">Burgers & Fish</Link>
        </li>

        <li>
          <Link to="/kebabs">Kebabs & Wraps</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizzas & Breads</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>

        <li>
          <Link to="/meals">Meals & Kids</Link>
        </li>
        <li>
          <Link to="/sides">Sides & Other</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
