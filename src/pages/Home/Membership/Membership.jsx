import { Link } from "react-router-dom";
import useBadge from "../../../hooks/useBadge";
import { AwesomeButton } from "react-awesome-button";

const Membership = () => {
  const [badges] = useBadge();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
              <Link to={`checkout/${badge.package_name}`}>
                <AwesomeButton type="secondary">Explore</AwesomeButton>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Membership;
