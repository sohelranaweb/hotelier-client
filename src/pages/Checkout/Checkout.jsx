import { Link, useParams } from "react-router-dom";

import usePackageBadge from "../../hooks/usePackageBadge";

const Checkout = () => {
  const { package_name } = useParams();
  const { badge } = usePackageBadge(package_name);

  //   console.log(badge);
  return (
    <div className="pt-20 mb-16">
      <h1>Checkout page: {package_name}</h1>
      <div className="card w-1/2 bg-base-100 shadow-xl mx-auto my-4">
        <figure>
          <img src={badge.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-6 items-center">
            <h2 className="card-title text-rose-500 text-2xl font-bold">
              {badge.package_name}
            </h2>
            <p className="text-rose-500 text-2xl font-bold">$ {badge.price}</p>
          </div>
          <p>{badge.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/payment/${package_name}`}>
              <button className="btn bg-[#f62b48] text-white text-lg">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
