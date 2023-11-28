import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUpcomingMeals = () => {
  const axiosSecure = useAxiosSecure();

  const { data: upcomingMeals = [] } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/upcoming-meals`);
      return res.data;
    },
  });
  return [upcomingMeals];
};

export default useUpcomingMeals;
