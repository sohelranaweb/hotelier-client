import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";



const MealCard = ({ item }) => {
  const { _id, title, meal_image, price, rating, ingredients } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={meal_image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{title}</h2>
        <p>{ingredients}</p>
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        <div className="card-actions justify-end">
          <Link to={`/meal/${_id}`}>
            <button className="btn btn-outline border-0 border-b-4 mb-4 bg-slate-100 border-[#f62b48]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
