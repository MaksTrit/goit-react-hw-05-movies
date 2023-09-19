import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  ActorName,
  CastImage,
  CastList,
  CastListItem,
  Character,
  Error,
  Heading,
} from './Cast.styled';

const defaultImg =
  'https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async id => {
      setIsLoading(true);
      try {
        const { cast: data } = await getMovieCast(id);
        setCast(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader margin="50px" />}
      {error && <Error>{error.message}</Error>}
      {cast.length === 0 && !isLoading && (
        <Heading>There is no information about the cast</Heading>
      )}
      {!!cast.length && (
        <CastList>
          {cast.map(({ id, character, name, profile_path }) => {
            return (
              <CastListItem key={id}>
                <CastImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <div>
                  <ActorName>{name}</ActorName>
                  <Character>
                    Character:
                    <span>{character} </span>
                    {/* <span></span> */}
                  </Character>
                </div>
              </CastListItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
