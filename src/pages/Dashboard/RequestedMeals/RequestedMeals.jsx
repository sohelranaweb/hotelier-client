import { Helmet } from "react-helmet-async";
import useMealRequest from "../../../hooks/useMealRequest";

const RequestedMeals = () => {
  const [meals] = useMealRequest();
  // const status = meals.map((meal) => meal.status);

  return (
    <div>
      <Helmet>
        <title>Hotelier | Request Meal</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="text-base">Serial</th>
              <th className="text-base">Meal Title</th>
              <th className="text-base">Likes</th>
              <th className="text-base">Reviews</th>
              <th className="text-base">Status</th>
              <th className="text-base">Delete</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal, index) => (
              <tr key={meal._id}>
                <th className="text-base">{index + 1}</th>
                <td className="text-base">{meal.title}</td>
                <td className="text-base">{meal.likes}</td>
                <td className="text-base">{meal.reviews}</td>
                <td className="text-base">{meal.status}</td>
                <td className="text-base">
                  <button
                    disabled={meal.status === "delivered"}
                    className="btn bg-[#f62b48] text-white btn-md"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedMeals;
