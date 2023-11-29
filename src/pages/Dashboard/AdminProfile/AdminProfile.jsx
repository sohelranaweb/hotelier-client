import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMeal from "../../../hooks/useMeal";
import { Helmet } from "react-helmet-async";

const AdminProfile = () => {
  const [meals] = useMeal();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: adminUser } = useQuery({
    enabled: !!user?.email,
    queryKey: ["adminUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  console.log(adminUser);
  return (
    <div>
      <Helmet>
        <title>Hotelier | Admin Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src="https://i.ibb.co/TmRbd97/profile-Bg.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={adminUser?.image}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {/* {role && role.toUpperCase()} */}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            Number of Meals: {meals?.length}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black my-2 ">
                  {adminUser?.name}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black my-2">
                  {adminUser?.email}
                </span>
              </p>
              <p className="flex flex-col">
                Role
                <span className="font-bold text-black my-2">
                  {adminUser?.role}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
