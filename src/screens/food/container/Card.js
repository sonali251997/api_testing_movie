import "./style.css"

const Card = ({ categories }) => {
  return (
    <div className="movie-card" key={categories.idCategory}>
      <h3 className="movie-title">{categories.strCategory}</h3>
      <p className="movie-description">{categories.strCategoryDescription}</p>
      {/* <p className="movie-release-year">Release Year: {categories.releaseYear}</p> */}
    </div>
  );
};

export default Card;