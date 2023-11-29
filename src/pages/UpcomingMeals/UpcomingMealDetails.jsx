import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Rating } from "@smastrom/react-rating";
import { MdPreview } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const UpcomingMealDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  console.log(id);
  const { data: upcomingMeals = [] } = useQuery({
    enabled: !!id,
    queryKey: ["upcomingMeals", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/upcomingMeal/${id}`);
      return res.data;
    },
  });
  console.log(upcomingMeals);
  const {
    meal_image,
    title,
    admin_name,
    description,
    ingredients,
    date,
    rating,
    likes,
    reviews,
    category,
  } = upcomingMeals;
  return (
    <div className="mb-16">
      <Helmet>
        <title>Hotelier | Upcoming Meal Details</title>
      </Helmet>
      <div className="card glass">
        <figure>
          <img className="w-full" src={meal_image} alt="car!" />
        </figure>

        <div className="card-body space-y-3">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg font-medium">{ingredients}</p>
          <p>{description}</p>
          <div className="md:flex md:justify-between md:items-center">
            <h1 className="text-xl font-semibold">Category: {category}</h1>
            <h1 className="text-xl font-semibold">Posted By: {admin_name}</h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <p className="text-lg font-medium">Posting: {date}</p>
              <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            </div>
            {/* like and review button  */}

            <div className="stats shadow">
              <div className="stat cursor-pointer">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Likes</div>
                <div className="stat-value text-primary">{likes}K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat cursor-pointer">
                <div className="stat-figure text-secondary">
                  <MdPreview className="text-4xl"></MdPreview>
                </div>
                <div className="stat-title">Reviews</div>
                <div className="stat-value text-secondary">{reviews}M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>

            <button disabled className="btn btn-primary">
              Meal Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMealDetails;
