import { Helmet } from "react-helmet-async";
import useUpcomingMeals from "../../hooks/useUpcomingMeals";
import UpcomingMealCard from "./UpcomingMealCard";

const UpcomingMeals = () => {
  const [upcomingMeals] = useUpcomingMeals();
  return (
    <div>
      <Helmet>
        <title>Hotelier | Upcoming Meals</title>
      </Helmet>
      <div className="pt-24 mb-16">
        <h1 className="text-center text-3xl font-medium my-4">
          Upcoming meals
        </h1>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-12">
            {upcomingMeals.map((item) => (
              <UpcomingMealCard key={item._id} item={item}></UpcomingMealCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeals;
