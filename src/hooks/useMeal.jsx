import { useEffect, useState } from "react";

const useMeal = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://hotelier-server.vercel.app/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      });
  }, []);
  return [meals, loading];
};

export default useMeal;
