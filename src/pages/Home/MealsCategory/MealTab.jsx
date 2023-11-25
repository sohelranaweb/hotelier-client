import MealCard from "../../../components/MealCard/MealCard";

const MealTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {items.map((item) => (
        <MealCard key={item._id} item={item}></MealCard>
      ))}
    </div>
  );
};

export default MealTab;
