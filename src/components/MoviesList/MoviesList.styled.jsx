import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListItem = styled.li`
  height: 420px;
  width: 210px;
  overflow: hidden;
  border: 1px solid #003b46;
  border-radius: 6px;
  background-color: #fff;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 26px 8px #003b46a9;
    span {
      text-shadow: 0px 0px 4px #07575ba9;
      color: #003b46;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemPoster = styled.img`
  height: 315px;
  object-fit: cover;
`;

export const ItemTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 10px 8px;

  span {
    font-size: 22px;
    color: #07575b;
    text-align: center;
    transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;
