import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddMeal = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const mealInfo = {
        admin_name: data.admin_name,
        admin_email: data.admin_email,
        title: data.meal_title,
        likes: data.like,
        date: data.date,
        reviews: data.review,
        ingredients: data.ingredients,
        category: data.category,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        description: data.description,
        meal_image: res.data.data.display_url,
      };
      const mealRes = await axiosSecure.post("/meals", mealInfo);
      console.log(mealRes.data);
      if (mealRes.data.insertedId) {
        reset();
        toast.success(`${data.meal_title} is added to meals`);
      }
    }
    // console.log(res.data);
  };
  return (
    <div>
      <h1>Add Meal page</h1>
      <div className="w-full h-[600px] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("admin_name", { required: true })}
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
                  {...register("admin_email", { required: true })}
                  type="text"
                  placeholder="Admin Email"
                />
              </div>
              {/* meal category  */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full "
                >
                  <option disabled value="default">
                    select category
                  </option>
                  <option value="breakfast">Breakfast</option>
                  <option value="dinner">Dinner</option>
                  <option value="lunch">Lunch</option>
                </select>
              </div>
              {/* description  */}
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>

                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  className="block rounded-md focus:rose-300 w-full h-12 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                  name="description"
                ></textarea>
              </div>
              {/* ingredients  */}
              <div className="space-y-1 text-sm">
                <label className="block text-gray-600">Ingredients</label>

                <textarea
                  {...register("ingredients", { required: true })}
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
                  {...register("meal_title", { required: true })}
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
                  {...register("date", { required: true })}
                  id="title"
                  type="date"
                  placeholder="Date"
                />
              </div>
              {/* meal image  */}
              <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  name="image"
                  className="file-input w-full max-w-xs"
                />
              </div>
              {/* price  */}
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="price" className="block text-gray-600">
                    Price
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="price"
                    {...register("price", { required: true })}
                    id="price"
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
                    {...register("rating", { required: true })}
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
                    {...register("like", { required: true })}
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
                    {...register("review", { required: true })}
                    type="number"
                    placeholder="Reviews"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#f62b48]"
            >
              Add Meal
              {/* {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Save & Continue"
            )} */}
            </button>
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#f62b48]"
            >
              Upcoming Meal
              {/* {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Save & Continue"
            )} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeal;
