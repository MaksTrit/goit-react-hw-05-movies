import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { useEffect } from 'react';
import { getMoviesOnQuery } from 'services/api';
import { ContentWrapper, Error, Heading } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies(movieName) {
      if (!movieName) return;
      setQuery(movieName);
      setIsLoading(true);
      try {
        const { results } = await getMoviesOnQuery(movieName);
        setMovies(results);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies(query);
  }, [query]);

  const handleSearch = searchMovie => {
    setQuery(searchMovie);
  };

  return (
    <ContentWrapper>
      <SearchBar onSearch={handleSearch} />
      {error && <Error>{error.message}</Error>}
      {isloading && <Loader margin="70px" />}
      {!movies.length && !!query && !isloading && (
        <Heading>There are no movies matching your request</Heading>
      )}
      {!!movies.length && !isloading && <MoviesList movies={movies} />}
    </ContentWrapper>
  );
};

export default Movies;
