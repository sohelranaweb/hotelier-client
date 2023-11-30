import { Rating } from "@smastrom/react-rating";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { MdPreview } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AwesomeButton } from "react-awesome-button";

const MealDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  // console.log(id);
  const { data: meals = [] } = useQuery({
    enabled: !!id,
    queryKey: ["meals", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal/${id}`);
      setReview(parseInt(res.data.reviews));
      setLike(parseInt(res.data.likes));
      return res.data;
    },
  });
  // console.log(meals);

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
  } = meals;
  // console.log("review", reviews);
  // console.log("meal upcoming detais image", meal_image);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const loggedUser = useUser();
  const [review, setReview] = useState(reviews);
  const [isReview, setIsReview] = useState(false);
  const [like, setLike] = useState(likes);
  const [isLike, setIsLike] = useState(false);
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
  const handleReview = async (event) => {
    event.preventDefault();
    const updatedReview = isReview ? review - 1 : review + 1;
    setReview(updatedReview);
    setIsReview(!isReview);

    // const rev = axiosSecure.patch(`/meals/${_id}`, parseInt(reviews));
    // console.log("after review", rev.data);

    if (user && user.email) {
      const form = event.target;
      const review_comment = form.review.value;

      console.log(review_comment);

      //  send data to database
      const mealReviewInfo = {
        mealId: _id,
        name: user?.displayName,
        email: user?.email,
        title,
        meal_image,
        likes,
        review_comment,
        reviews,
      };
      axiosSecure.post("/reviews", mealReviewInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Meal review successful!");
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
  const handleLike = async (event) => {
    event.preventDefault();

    if (user && user.email) {
      const updatedLike = isLike ? like - 1 : like + 1;
      setLike(updatedLike);
      setIsLike(!isLike);
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
              <div className="stat ">
                <Link onClick={handleLike} className="stat-figure">
                  <p className={"" + (isLike ? "text-primary" : "")}>
                    <AiOutlineLike className="text-4xl"></AiOutlineLike>
                  </p>
                </Link>

                <div className="stat-value text-primary">{like}K</div>
              </div>

              <div className="stat">
                <Link
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="stat-figure"
                >
                  <p className={"" + (isReview ? "text-primary" : "")}>
                    <MdPreview className="text-4xl"></MdPreview>
                  </p>
                </Link>

                <div className="stat-value text-secondary">{review}M</div>
              </div>
            </div>

            {isLoggedUser ? (
              <Link onClick={handleMealRequest}>
                <AwesomeButton type="secondary">Meal Request</AwesomeButton>
              </Link>
            ) : (
              <button disabled className="btn btn-primary">
                Meal Request
              </button>
            )}
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Please some feedback about Our Meal
          </h3>
          <form onSubmit={handleReview}>
            <div className="md:flex mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="review"
                    // defaultValue={job_title}
                    placeholder="review"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn btn-block text-white bg-[#f62b48]"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MealDetails;
