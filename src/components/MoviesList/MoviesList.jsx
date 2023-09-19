import { useLocation } from 'react-router-dom';

import {
  ItemPoster,
  ItemTitle,
  List,
  ListItem,
  StyledLink,
} from './MoviesList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const chooseUrl = id => {
    return location.pathname.includes('movies') ? `${id}` : `movies/${id}`;
  };

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <StyledLink to={chooseUrl(movie.id)} state={{ from: location }}>
            <ItemPoster
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
            />
            <ItemTitle>
              <span>{movie.title}</span>
            </ItemTitle>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};
