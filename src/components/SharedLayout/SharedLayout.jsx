import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledNav,
} from './StyledSharedLayout';

export const SharedLayout = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};
