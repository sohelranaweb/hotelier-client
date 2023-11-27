import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateMeal = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: meal = [] } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal/${id}`);
      return res.data;
    },
  });
  console.log(meal);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.meal_title.value;
    const admin_name = form.admin_name.value;
    const admin_email = form.admin_email.value;
    const likes = form.like.value;
    const date = form.date.value;
    const reviews = form.review.value;
    const ingredients = form.ingredients.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updatedMeal = {
      title,
      admin_name,
      admin_email,
      likes,
      date,
      reviews,
      ingredients,
      category,
      price,
      rating,
      description,
    };
    console.log(updatedMeal);
    axiosSecure.put(`/meals/${id}`, updatedMeal).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success(`meal is an updated now!`);
      }
    });
  };
  return (
    <div className="pt-28 mb-16">
      <h1>update meal page: {id}</h1>
      <div className="w-full h-[600px] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* admin name  */}
              <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-600">
                  Admin Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="admin_name"
                  defaultValue={meal.admin_name}
                  // {...register("admin_name")}
                  id="location"
                  type="text"
                  placeholder="Admin Name"
                />
              </div>
              {/* admin email  */}
              <div className="space-y-1 text-sm">
                <label className="block text-gray-600">Admin email</label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="admin_email"
                  defaultValue={meal?.admin_email}
                  // {...register("admin_email")}
                  type="text"
                  placeholder="Admin Email"
                />
              </div>
              {/* meal category  */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="category"
                  defaultValue={meal?.category}
                  // {...register("admin_email")}
                  type="text"
                  placeholder="Category"
                />
                {/* <select
                  defaultValue={meal?.category}
                  className="select select-bordered w-full "
                >
                  <option disabled value="">
                    select category
                  </option>
                  <option value="breakfast">Breakfast</option>
                  <option value="dinner">Dinner</option>
                  <option value="lunch">Lunch</option>
                </select> */}
              </div>
              {/* description  */}
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>

                <textarea
                  id="description"
                  defaultValue={meal?.description}
                  // {...register("description")}
                  className="block rounded-md focus:rose-300 w-full h-12 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                  name="description"
                ></textarea>
              </div>
              {/* ingredients  */}
              <div className="space-y-1 text-sm">
                <label className="block text-gray-600">Ingredients</label>

                <textarea
                  defaultValue={meal?.ingredients}
                  // {...register("ingredients")}
                  className="block rounded-md focus:rose-300 w-full h-12 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                  name="ingredients"
                ></textarea>
              </div>
            </div>

            <div className="space-y-6">
              {/* meal title  */}
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Meal Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="meal_title"
                  defaultValue={meal?.title}
                  // {...register("meal_title")}
                  id="title"
                  type="text"
                  placeholder="Title"
                />
              </div>
              {/* meal post date  */}
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Date
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="date"
                  defaultValue={meal?.date}
                  // {...register("date")}
                  id="title"
                  type="date"
                  placeholder="Date"
                />
              </div>
              {/* meal image  */}
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Image
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="image"
                  defaultValue={meal?.meal_image}
                  // {...register("date")}
                  id="title"
                  type="text"
                  placeholder="Image"
                />
              </div>
              {/* price  */}
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-600">Price</label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="price"
                    defaultValue={meal?.price}
                    // {...register("price")}
                    type="number"
                    placeholder="Price"
                  />
                </div>
                {/* Rating  */}
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-600">Rating</label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="rating"
                    defaultValue={meal?.rating}
                    // {...register("rating")}
                    type="number"
                    placeholder="Rating"
                  />
                </div>
              </div>
              {/* like  */}
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-600">Likes</label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="like"
                    defaultValue={meal?.likes}
                    // {...register("like")}
                    type="number"
                    placeholder="Likes"
                  />
                </div>
                {/* reviews  */}
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-600">Reviews</label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="review"
                    defaultValue={meal?.reviews}
                    // {...register("review")}
                    type="number"
                    placeholder="Reviews"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <input
              type="submit"
              value="Update meal"
              className="btn btn-block text-white bg-[#72B261]"
            />
            {/* <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#f62b48]"
            >
              Update Meal
              {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Save & Continue"
            )}
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMeal;
