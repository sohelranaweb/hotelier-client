import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePackageBadge = (package_name) => {
  const axiosSecure = useAxiosSecure();
  const { data: badge = {} } = useQuery({
    queryKey: ["badge"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/badge/${package_name}`);
      return res.data;
    },
  });
  return { badge };
};

export default usePackageBadge;
