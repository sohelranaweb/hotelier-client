import { Rating } from "@smastrom/react-rating";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { MdPreview } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const MealDetails = () => {
  const loadedMeal = useLoaderData();
  const {
    _id,
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
  } = loadedMeal;
  // console.log("meal upcoming detais image", meal_image);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const loggedUser = useUser();
  // console.log(loggedUser);
  const isLoggedUser = loggedUser && loggedUser?.status;
  const handleMealRequest = () => {
    if (user && user.email) {
      //  send data to database

      const mealRequestInfo = {
        mealId: _id,
        name: user?.displayName,
        email: user?.email,
        title,
        meal_image,
        likes,
        reviews,
        status: "pending",
      };
      axiosSecure.post("/meal-request", mealRequestInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Meal request successful!");
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: `${name} added to cart`,
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          // refetch the cart
          // refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Yor are not Logged in?",
        text: "please login add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="mb-16">
      <Helmet>
        <title>Hotelier | Meal Details</title>
      </Helmet>
      <div className="card glass">
        <figure className="">
          <img className="" src={meal_image} alt="car!" />
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

            {isLoggedUser ? (
              <Link onClick={handleMealRequest}>
                <button className="btn btn-primary">Meal Request</button>
              </Link>
            ) : (
              <button disabled className="btn btn-primary">
                Meal Request
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
