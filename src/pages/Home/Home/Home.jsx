import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import MealsCategory from "../MealsCategory/MealsCategory";
import Membership from "../Membership/Membership";
import SomeDeliciousFood from "../SomeDeliciousFood/SomeDeliciousFood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* meals category  */}
      <div className="my-16">
        <MealsCategory></MealsCategory>
      </div>
      {/* Membership section  */}
      <div className="my-16">
        <Membership></Membership>
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
