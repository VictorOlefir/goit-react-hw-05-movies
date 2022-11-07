import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HomeContainer,
  HomeTitle,
  MovieList,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from './Home.styled';
import { fetchTrending } from '../../api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Tranding today</HomeTitle>
      {!!movies.length && (
        <MovieList>
          {movies.map(({ id, title, poster }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img src={poster} alt={title} />
                <MovieTitle>
                  <h3>{title}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </HomeContainer>
  );
};

export default Home;
