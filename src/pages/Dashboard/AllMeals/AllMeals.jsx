import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });
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
        axiosSecure.delete(`/meals/${meal._id}`).then((res) => {
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
      <h1>All meals here: {meals.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-orange-400 text-white">
              <tr>
                <th className="text-base"></th>
                <th className="text-base">Meal Title</th>
                <th className="text-base">Likes</th>
                <th className="text-base">Reviews</th>
                <th className="text-base">Distributer Name</th>
                <th className="text-base">Distributer Email</th>
                <th className="text-base">Update</th>
                <th className="text-base">Delete</th>
                <th className="text-base">View Meal</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal, index) => (
                <tr key={meal._id}>
                  <th className="text-base">{index + 1}</th>
                  <td className="text-base">{meal.title}</td>
                  <td className="text-base">{meal.likes}</td>
                  <td className="text-base">{meal.reviews}</td>
                  <td className="text-base">{meal.admin_name}</td>
                  <td className="text-base">{meal.admin_email}</td>
                  <td className="text-base">
                    <button className="btn btn-ghost btn-md">
                      <FaEdit className="text-red-600 text-lg"></FaEdit>
                    </button>
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
                    <Link
                      to={`/meal/${meal._id}`}
                      className="btn bg-[#f62b48] text-white"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMeals;
