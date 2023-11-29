import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMealRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: meals = [] } = useQuery({
    queryKey: ["meal", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal-request?email=${user.email}`);
      return res.data;
    },
  });
  return [meals, refetch];
};

export default useMealRequest;
