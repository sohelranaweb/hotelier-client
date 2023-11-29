import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import MealsCategory from "../MealsCategory/MealsCategory";
import Membership from "../Membership/Membership";
import SomeDeliciousFood from "../SomeDeliciousFood/SomeDeliciousFood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hotelier | Home</title>
      </Helmet>
      <Banner></Banner>

      {/* meals category  */}
      <div className="my-16">
        <MealsCategory></MealsCategory>
      </div>
      {/* Membership section  */}
      <div className="my-16">
        <h1 className="text-center text-3xl font-medium mb-2">
          Get Membership
        </h1>
        <h1 className="text-lg text-[#f62b48] text-center mb-2">
          Unlock the power to request personalized meals crafted by our top
          chefs, tailored to your <br /> preferences and delivered to your
          doorstep.
        </h1>
        <div className="mt-8">
          <Membership></Membership>
        </div>
      </div>
      {/* some Delicious food  */}
      <div className="my-16">
        <h1 className="text-center text-3xl font-medium mb-2">
          Some Delicious <span className="text-[#f62b48]">Food</span>
        </h1>
        <h1 className="text-lg text-[#f62b48] text-center mb-2">
          Elevate your dining experience with our chef signature dishes and
          culinary marvels
        </h1>

        <div className="mt-4">
          <SomeDeliciousFood></SomeDeliciousFood>
        </div>
      </div>
      {/* customer review */}
      <div className="my-16">
        <h1 className="text-lg text-[#f62b48] text-center mb-2">TESTIMONIAL</h1>
        <h1 className="text-center text-3xl font-medium mb-2">
          What they say about us
        </h1>
        <div className="mt-4">
          <CustomerReview></CustomerReview>
        </div>
      </div>
    </div>
  );
};

export default Home;
