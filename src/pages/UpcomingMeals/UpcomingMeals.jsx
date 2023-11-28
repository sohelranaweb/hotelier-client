import MealCard from "../../components/MealCard/MealCard";
import useUpcomingMeals from "../../hooks/useUpcomingMeals";

const UpcomingMeals = () => {
  const [upcomingMeals] = useUpcomingMeals();
  return (
    <div className="pt-24 mb-16">
      <h1>Upcoming meal page</h1>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-12">
          {upcomingMeals.map((item) => (
            <MealCard key={item._id} item={item}></MealCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeals;
