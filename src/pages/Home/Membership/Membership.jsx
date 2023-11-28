import { Link } from "react-router-dom";
import useBadge from "../../../hooks/useBadge";

const Membership = () => {
  const [badges] = useBadge();
  return (
    <div className="flex justify-between">
      {/* card 1  */}
      {badges.map((badge) => (
        <div
          key={badge._id}
          className="card w-96 bg-base-100 shadow-xl image-full"
        >
          <figure>
            <img src={badge.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-rose-500 text-2xl font-bold">
              {badge.package_name}
            </h2>
            <p className="text-rose-500 text-2xl font-bold">$ {badge.price}</p>
            <div className="card-actions justify-end">
              <Link
                to={`checkout/${badge.package_name}`}
                className="btn bg-rose-500 border-0 text-white"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Membership;
