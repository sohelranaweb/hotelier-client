import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ServeMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal-request/admin`);
      return res.data;
    },
  });
  //   console.log(meals);
  const handleServeMeal = async (id) => {
    console.log(id);
    const meal = {
      status: "delivered",
    };
    const serveMealStatus = await axiosSecure.patch(
      `/meal-request/${id}`,
      meal
    );
    console.log("user information update after payment", serveMealStatus.data);
    refetch();
  };
  return (
    <div>
      <Helmet>
        <title>Hotelier | Serve Meal</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="text-base">Serial</th>
                <th className="text-base">Meal Title</th>
                <th className="text-base">Name</th>
                <th className="text-base"> Email</th>
                <th className="text-base">Status</th>
                <th className="text-base">View Meal</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal, index) => (
                <tr key={meal._id}>
                  <th className="text-base">{index + 1}</th>
                  <td className="text-base">{meal.title}</td>
                  <td className="text-base">{meal.name}</td>
                  <td className="text-base">{meal.email}</td>
                  <td className="text-base">{meal.status}</td>

                  <td className="text-base">
                    {/* <Link
                      onClick={() => handleServeMeal(meal._id)}
                      className="btn bg-[#f62b48] text-white"
                    >
                      Serve Meal
                    </Link> */}
                    {meal.status !== "delivered" ? (
                      <Link
                        onClick={() => handleServeMeal(meal._id)}
                        className="btn bg-[#f62b48] text-white"
                      >
                        Serve Meal
                      </Link>
                    ) : (
                      <button className="btn bg-[#f62b48] text-white" disabled>
                        Meal Served
                      </button>
                    )}
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

export default ServeMeals;
