import { styled } from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewsListItem = styled.li`
  border: 1px solid #003b46;
  border-radius: 20px;
  padding: 15px 20px;
  background-color: #e3f8fb;
`;

export const ReviewHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 20px;

  font-size: 24px;

  h4 {
    color: #003b46;
  }
`;

export const ReviewContent = styled.p`
  font-size: 22px;
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
