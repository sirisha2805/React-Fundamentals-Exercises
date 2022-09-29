const MovieCard = ({ movieInfo }) => {
  return (
    <li key={movieInfo.id}>
      <h2>{movieInfo.name}</h2>
      <h3>Liked By: </h3>
    </li>
  );
};

export default MovieCard;
