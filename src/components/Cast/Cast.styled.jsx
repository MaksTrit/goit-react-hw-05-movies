import { styled } from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const CastListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 380px;
  width: 150px;
  overflow: hidden;
  border: 1px solid #003b46;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #fff;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 8px;
  }
`;

export const CastImage = styled.img`
  width: 150px;
  height: 230px;
`;

export const ActorName = styled.h4`
  font-size: 18px;
  text-align: center;
  color: #3b5557;
  margin-bottom: 15px;
`;

export const Character = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;

  text-align: center;
  font-size: 16px;
  color: #121718;

  span {
    font-size: 18px;
    font-weight: 500;

    color: #3b5557;
  }
`;

export const Heading = styled.h3`
  text-align: center;
  color: #07575b;
  font-size: 36px;
  margin: 60px 0px;
`;

export const Error = styled.p`
  text-align: center;
  color: #07575b;
  font-size: 36px;
  margin: 40px 0px;
`;
