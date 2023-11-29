import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUpcomingMeals from "../../../hooks/useUpcomingMeals";
import { Helmet } from "react-helmet-async";

const DashboardUpcomingMeals = () => {
  const [meals] = useUpcomingMeals();
  return (
    <div>
      <Helmet>
        <title>Hotelier | Dashboard Upcoming meals</title>
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
                  <Link
                    to={`/updateMeal/${meal._id}`}
                    className="btn btn-ghost btn-md"
                  >
                    <FaEdit className="text-red-600 text-lg"></FaEdit>
                  </Link>
                </td>
                <td className="text-base">
                  <button
                    // onClick={() => handleDelete(meal)}
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

export default DashboardUpcomingMeals;
