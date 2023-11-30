import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviewMeals = [], refetch } = useQuery({
    queryKey: ["reviewMeals"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews`);
      return res.data;
    },
  });
  // console.log(reviewMeals);
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
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Hotelier | Dashboard Review</title>
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
    </div>
  );
};

export default AllReviews;
