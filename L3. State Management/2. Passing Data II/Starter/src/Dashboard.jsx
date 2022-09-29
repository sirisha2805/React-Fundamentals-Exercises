/*import MovieCard from "./MovieCard"*/

import MovieCard from "./MovieCard";
import { hasFavoriteMovie, getUsersArray,mapUserNames} from "./utils";

const Dashboard = ({ movies, profiles, users }) => {
  const movieCards = Object.keys(movies).map((id) => (
    <>
      <MovieCard key={id} movieInfo={movies[id]} />
      {hasFavoriteMovie(id, profiles) ? (
        <ul>{mapUserNames(getUsersArray(profiles, id),users).map(name => <li> {name} </li>)}</ul>
      ) : (
        <p>no one favorited the movie</p>
      )}
    </>
  ));
  return <ul>{movieCards}</ul>;
};

export default Dashboard;
