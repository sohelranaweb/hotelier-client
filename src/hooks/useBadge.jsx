import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBadge = () => {
  const axiosPublic = useAxiosPublic();
  const { data: badges = [] } = useQuery({
    queryKey: ["badges"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/badge`);
      return res.data;
    },
  });
  return [badges];
};

export default useBadge;
