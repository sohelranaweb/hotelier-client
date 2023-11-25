const CustomerReview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-[#f62b48] p-4">
          <div className="flex justify-center gap-4">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co/f1Pj4qv/user2.jpg"
              alt=""
            />
          </div>
          <p className="mt-3 text-center">
            Hotelier exceeded my expectations! The exceptional service, coupled
            with a diverse menu, made every meal a delight. The chefs truly
            understand the student palate, delivering flavors that satisfy and
            comfort. The staff is friendliness adds a personal touch, creating a
            welcoming atmosphere. I highly recommend Hotelier Dining for a
            delicious and hassle-free dining experience.
          </p>
          <div className="flex justify-center mt-2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-[#f62b48] italic">
                Michael
              </h1>
              <p className="italic">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="border border-[#f62b48] p-4">
          <div className="flex justify-center gap-4">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co/kDLcPKT/user1.jpg"
              alt=""
            />
          </div>
          <p className="mt-3 text-center">
            Hotelier Dining has transformed my university dining experience. The
            quality and variety of meals are outstanding, providing a perfect
            blend of nutrition and taste. The attention to dietary preferences
            is commendable, ensuring satisfaction for every palate. The service
            is prompt, and the staff is warmth makes it feel like a home away
            from home. Hotelier Dining is a culinary gem for students seeking
            both convenience and culinary delight!
          </p>
          <div className="flex justify-center mt-2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-[#f62b48] italic">
                Aveda
              </h1>
              <p className="italic">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="border border-[#f62b48] p-4">
          <div className="flex justify-center gap-4">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co/WxJdM41/user3.jpg"
              alt=""
            />
          </div>
          <p className="mt-3 text-center">
            Hotelier Dining has set a new standard in student dining. The menu
            diversity, nutritional focus, and impeccable service make it a
            standout choice. Each meal feels like a curated experience, and the
            attention to detail in catering to dietary needs is impressive.
            Hotelier Dining has turned mundane meals into a daily highlight,
            contributing significantly to my university life. It is a must-try
            for students who appreciate quality, flavor, and a touch of culinary
            finesse
          </p>
          <div className="flex justify-center mt-2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-[#f62b48] italic">
                Buddy
              </h1>
              <p className="italic">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
