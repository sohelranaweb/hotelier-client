import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" mt-24">
      <div className="flex justify-center">
        <img
          className="w-[400px]"
          src="https://i.ibb.co/hKMN7vk/error-3.jpg"
          alt=""
        />
      </div>
      <p className="text-center text-xl">
        Go Back{" "}
        <Link to="/" className="text-2xl text-[#f62b48] font-semibold">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
