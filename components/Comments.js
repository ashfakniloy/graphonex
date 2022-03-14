import React from "react";
import Slider from "react-slick";

function Comments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="">
      <div className="lg:container py-16 px-4 lg:py-44">
        <div className="lg:mx-28">
          <div className="flex flex-col items-center">
            <img src="/images/message.png" alt="" />
          </div>
          <div className="mt-5 lg:mt-10">
            <div className="">
              <Slider {...settings}>
                <div className="p-6 text-center">
                  <img
                    src="/images/comments/person1.png"
                    alt=""
                    className="scale-150 lg:pb-5"
                  />
                  <h2 className="py-6 heading-lg lg:text-[26px] text-center">
                    “ The design quality is exquisite. What is even better than
                    the design quality is the customer service. Their response
                    time is surprisingly fast! ”
                  </h2>
                  <p className="text-lg lg:text-xl text-green-400">
                    Edward Hoffman
                  </p>
                  <p className="text-xs lg:text-sm text-custom-gray3">
                    Web designer from Gix
                  </p>
                </div>
                <div className="p-6 text-center">
                  <img
                    src="/images/comments/person2.png"
                    alt=""
                    className="scale-150 lg:pb-5"
                  />
                  <h2 className="py-6 heading-lg lg:text-[26px] text-center">
                    “ The themes are amazing. I am glad to stumble upon this
                    team. I crank out high-quality responsive websites for my
                    clients and they are glad too. Thanks! ”
                  </h2>
                  <p className="text-lg lg:text-xl text-green-400">
                    Gary Stonem
                  </p>
                  <p className="text-xs lg:text-sm text-custom-gray3">
                    Web Developer from Shneebly
                  </p>
                </div>
                <div className="p-6 text-center">
                  <img
                    src="/images/comments/person3.png"
                    alt=""
                    className="scale-150 lg:pb-5"
                  />
                  <h2 className="py-6 heading-lg lg:text-[26px] text-center">
                    “ What you’ve done worth a lot. I appreciate cooperation
                    with these guys. They are talented people. Thanks to them, I
                    built my own business and have my own employees. ”
                  </h2>
                  <p className="text-lg lg:text-xl text-green-400">
                    Juan Ramires
                  </p>
                  <p className="text-xs lg:text-sm text-custom-gray3">
                    CEO from Webtimizingly
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
