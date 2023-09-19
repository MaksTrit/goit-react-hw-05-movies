import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ContentWrapper = styled.main`
  padding: 30px 16px 30px 16px;
  background-color: #c4dfe6;
  min-height: 100vh;
`;

export const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 769px) {
    flex-wrap: wrap;
  }
`;

export const MoviePoster = styled.img`
  height: 400px;
  width: 270px;
  object-fit: cover;

  border: 1px solid #003b46;
  border-radius: 3px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  color: #07575b;
  margin-bottom: 30px;
`;

export const MovieFeature = styled.p`
  font-size: 23px;
  color: #07575b;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  span {
    margin-right: 8px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const InfoLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const InfoLinksItem = styled.li``;

export const StyledLink = styled(Link)`
  display: block;
  width: 140px;
  font-size: 26px;
  font-weight: 500;
  text-transform: uppercase;
  color: #07575b;
  text-align: center;
  border: 2px solid #07575b;
  padding: 8px 15px;
  border-radius: 30px;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus {
    background-color: #07575b;
    color: #ffffff;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 162px;
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 500;

  color: #07575b;
  text-align: center;
  border: 2px solid #07575b;
  padding: 6px 10px;
  border-radius: 30px;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.39, 0.575, 0.565, 1);

  svg {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus {
    background-color: #07575b;
    color: #ffffff;
  }
`;

export const Error = styled.p`
  text-align: center;
  color: #07575b;
  font-size: 36px;
  margin: 60px 0px;
`;
