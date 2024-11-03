import { Link } from "react-router-dom";


const Cards = ({ coffee }) => {

    const { name, image, category, origin, type, id, rating, popularity } = coffee;
    return (
        <div>
            <Link to={`/coffee/${id}`}>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="h-[250px] rounded-lg"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Category: {category}</p>
                        <p>Type: {type}</p>
                        <p>Origin: {origin}</p>
                        <p>Rating: {rating}</p>
                        <p>Popularity: {popularity}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;