import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StyledHeader = styled.header`
  margin-left: auto;
  margin-right: auto;
  background-color: #003b46;
  /* border-radius: 0px 0px 6px 6px; */
  padding: 20px 16px;
  /* margin-bottom: 30px; */
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  transition: color 300ms cubic-bezier(0.39, 0.575, 0.565, 1),
    text-shadow 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus {
    color: #c4dfe6;
    text-shadow: 0px 0px 8px #bafafda9;
  }

  &.active {
    color: #66a5ad;
    text-shadow: none;
  }
`;
