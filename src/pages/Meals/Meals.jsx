import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import MealCard from "../../components/MealCard/MealCard";
import { Helmet } from "react-helmet-async";

const Meals = () => {
  const axiosPublic = useAxiosPublic();
  const { data: meals = [] } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/meals");
      return res.data;
    },
  });

  const [searchItem, setSearchItem] = useState("");
  const [filteredMealTitle, setFilteredMealTitle] = useState(meals);
  useEffect(() => {
    setFilteredMealTitle(meals);
  }, [meals]);
  const handleTitle = () => {
    const newFilteredMeal = meals.filter((mealTitle) => {
      return mealTitle.title.toLowerCase().includes(searchItem.toLowerCase());
    });
    setFilteredMealTitle(newFilteredMeal);
    setSearchItem("");
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = () => {
    const newFilteredMeal = meals.filter((meal) => {
      return meal.category.toLowerCase() === selectedCategory.toLowerCase();
    });
    setFilteredMealTitle(newFilteredMeal);
    setSelectedCategory("");
  };

  return (
    <div>
      <Helmet>
        <title>Hotelier | All Meals</title>
      </Helmet>
      <div
        className="hero h-[80vh] mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co/pJK70CD/food-search.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF3]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold text-[#0B0B0B]">
              Seeking Meal By Meal Title
            </h1>
            {/* search by title  */}
            <div className="join">
              <input
                type="text"
                className="input input-bordered join-item text-black text-lg"
                placeholder="Search"
                value={searchItem}
                onChange={(event) => setSearchItem(event.target.value)}
              />
              <button
                onClick={handleTitle}
                className="btn bg-[#f62b48] border-none text-white join-item rounded-r-full"
              >
                Search
              </button>
            </div>
            <br />
            {/* search by category  */}
            <h1 className="my-5 text-3xl font-bold text-[#0B0B0B]">
              Filter By Category
            </h1>
            <div className="join">
              <select
                className="select select-bordered join-item text-black text-lg"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <option disabled value="">
                  Filter
                </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              <button
                onClick={handleCategory}
                className="btn bg-[#f62b48] border-none text-white join-item rounded-r-full"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-12">
        {filteredMealTitle.map((item) => (
          <MealCard key={item._id} item={item}></MealCard>
        ))}
      </div>
    </div>
  );
};

export default Meals;
