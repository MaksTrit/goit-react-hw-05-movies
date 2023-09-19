import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {
  BackLink,
  ContentWrapper,
  Error,
  InfoLinksItem,
  InfoLinksList,
  InfoWrapper,
  MovieFeature,
  MoviePoster,
  MovieTitle,
  MovieWrapper,
  StyledLink,
} from './MovieDetails.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';
  useEffect(() => {
    async function getMovieInfo(id) {
      setIsLoading(true);
      try {
        const movieInfo = await getMovieById(id);
        setMovie(movieInfo);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieInfo(movieId);
  }, [movieId]);

  return (
    <ContentWrapper>
      <BackLink to={backLinkHref}>
        <MdOutlineArrowBackIosNew />
        Back to the list
      </BackLink>
      {error && <Error>{error.message}</Error>}
      {isloading && <Loader margin="70px" />}
      {movie && (
        <MovieWrapper>
          <MoviePoster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
          />
          <InfoWrapper>
            <MovieTitle>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </MovieTitle>
            <MovieFeature>
              <span>User score:</span>
              {movie.vote_average.toFixed(1)}
            </MovieFeature>
            <MovieFeature>
              <span>Overview:</span>
              {movie.overview}
            </MovieFeature>
            <MovieFeature>
              <span>Genres:</span>
              {movie.genres.map(genre => genre.name).join(', ')}
            </MovieFeature>
            <InfoLinksList>
              <InfoLinksItem>
                <StyledLink to="cast" state={{ ...location.state }}>
                  Cast
                </StyledLink>
              </InfoLinksItem>
              <InfoLinksItem>
                <StyledLink to="reviews" state={{ ...location.state }}>
                  Reviews
                </StyledLink>
              </InfoLinksItem>
            </InfoLinksList>
          </InfoWrapper>
        </MovieWrapper>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </ContentWrapper>
  );
};

export default MovieDetails;
