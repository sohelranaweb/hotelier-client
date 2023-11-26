import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
        badge: "Bronze",
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-secondary w-[200px] my-3 "
      >
        <FcGoogle size={32} /> Google
      </button>
    </div>
  );
};

export default SocialLogin;
