import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/api';
import { ContentWrapper, Error, Heading } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <ContentWrapper>
      {}
      {isloading && <Loader margin="70px" />}
      {error && <Error>{error.message}</Error>}
      {!!movies.length && <Heading>TRENDING TODAY</Heading>}
      {!!movies.length && <MoviesList movies={movies} />}
    </ContentWrapper>
  );
};

export default Home;
