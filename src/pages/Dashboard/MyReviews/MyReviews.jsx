import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useState } from "react";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: reviewMeals = [], refetch } = useQuery({
    enabled: !!user?.email,
    queryKey: ["reviewMeals", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${user?.email}`);
      return res.data;
    },
  });
  // console.log(reviewMeals);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const handleEdit = (meal) => {
    setSelectedMeal(meal);
    document.getElementById("my_modal_3").showModal();
  };
  const handleDelete = (meal) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reviews/${meal._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            // Swal.fire({
            //   title: "Deleted!",
            //   text: "Your file has been deleted.",
            //   icon: "success",
            // });
            toast.success(`${meal.title} is deleted successfully`);
          }
        });
      }
    });
  };
  const handleUpdateReview = async (event) => {
    event.preventDefault();
    const form = event.target;
    const review_comment = form.reviewUpadate.value;
    const update = {
      review_comment: review_comment,
    };
    // console.log(review_comment);
    // console.log(selectedMeal);
    const reviewUpdateRes = await axiosSecure.patch(
      `/reviews/${selectedMeal._id}`,
      update
    );
    if (reviewUpdateRes.data.modifiedCount > 0) {
      refetch();
      toast.success("successfuly updated");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Hotelier | User Review</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="text-base">serial</th>
              <th className="text-base">Meal Title</th>
              <th className="text-base">Likes</th>
              <th className="text-base">Reviews</th>
              <th className="text-base">Review Comment</th>
              <th className="text-base">Update</th>
              <th className="text-base">Delete</th>
              <th className="text-base">View Meal</th>
            </tr>
          </thead>
          <tbody>
            {reviewMeals.map((meal, index) => (
              <tr key={meal._id}>
                <th className="text-base">{index + 1}</th>
                <td className="text-base">{meal.title}</td>
                <td className="text-base">{meal.likes}</td>
                <td className="text-base">{meal.reviews}</td>
                <td className="text-base">{meal.review_comment}</td>
                <td className="text-base">
                  <Link
                    onClick={() => handleEdit(meal)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaEdit className="text-red-600 text-lg"></FaEdit>
                  </Link>
                </td>
                <td className="text-base">
                  <button
                    onClick={() => handleDelete(meal)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
                <td className="text-base">
                  <Link className="btn bg-[#f62b48] text-white">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => {
                setSelectedMeal(null);
                document.getElementById("my_modal_3").close();
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Change Your review comment</h3>
          <form onSubmit={handleUpdateReview}>
            <div className="md:flex mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="reviewUpadate"
                    defaultValue={selectedMeal?.review_comment}
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

export default MyReviews;
