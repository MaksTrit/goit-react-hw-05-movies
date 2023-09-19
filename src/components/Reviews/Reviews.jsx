import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  Error,
  Heading,
  ReviewContent,
  ReviewHeading,
  ReviewsList,
  ReviewsListItem,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async id => {
      setIsLoading(true);
      try {
        const { results, total_results } = await getMovieReviews(id);
        if (total_results) setReviews(results);
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
      {isLoading && <Loader margin="70px" />}
      {error && <Error>{error.message}</Error>}
      {reviews.length === 0 && !isLoading && (
        <Heading>There are no reviews for this movie</Heading>
      )}
      {!!reviews.length && (
        <ReviewsList>
          {reviews.map(review => {
            return (
              <ReviewsListItem key={review.id}>
                <ReviewHeading>
                  <p>Author:</p>
                  <h4>{review.author}</h4>
                </ReviewHeading>
                <ReviewContent>{review.content}</ReviewContent>
              </ReviewsListItem>
            );
          })}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
