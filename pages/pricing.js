import { useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Pricing from "../components/Pricing";
import Request from "../components/Request";
import { pricingList } from "../data/pricingList";

// const pricingList = [
//   {
//     id: 1,
//     name: "Basic Plan",
//     options: {
//       option1: "Option 1",
//       option2: "Option 2",
//       option3: "Option 3",
//     },
//     price: "24",
//     img: "/images/pricing/basic.png",
//   },
//   {
//     id: 2,
//     name: "Standard Plan",
//     options: {
//       option1: "Option 1",
//       option2: "Option 2",
//       option3: "Option 3",
//     },
//     price: "24",
//     img: "/images/pricing/standard.png",
//   },
//   {
//     id: 3,
//     name: "Pro Plan",
//     options: {
//       option1: "Option 1",
//       option2: "Option 2",
//       option3: "Option 3",
//     },
//     price: "24",
//     tag: "Best Choice",
//     img: "/images/pricing/pro.png",
//   },
// ];

function pricing() {
  const heading = "Pricing";
  const text = "Beautifully Minimal";
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <div className="lg:container py-12 lg:py-[190px]">
          <Pricing />
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 bg-white py-16">
            {pricingList.map((item) => (
              <div
                key={item.id}
                className="relative grid grid-cols-1 text-center items-center gap-4 px-4 py-8 lg:p-4  lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                {item.tag && (
                  <div className="absolute top-0 w-28 border-r-8 border-custom-orange bg-custom-gray3 text-custom-gray4 font-bold text-xs py-3 uppercase">
                    best choice
                  </div>
                )}
                <div className="mx-auto">
                  <img src={item.img} alt="" />
                </div>
                <div className="heading-sm mt-4">
                  <h2>{item.name}</h2>
                </div>
                <div className="grid grid-cols-1 items-center divide-y px-8 text-[15px] text-[#c7c7c7] gap-3">
                  <h2 className="">{item.options.option1}</h2>
                  <h2 className="pt-3">{item.options.option2}</h2>
                  <h2 className="pt-3">{item.options.option3}</h2>
                </div>
                <div className="">
                  <h2 className="font-Montserrat text-[20px]">
                    $<span className="heading-xl">{item.price}</span>/mo
                  </h2>
                </div>
                <div className="">
                  <button
                    className="px-10 py-2 rounded-full border-2 border-[#e7c3a5] hover:bg-[#e7c3a5] duration-300 uppercase"
                    onClick={() => setShowModal(true)}
                  >
                    get it
                  </button>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Request />
      </div>
    </Layout>
  );
}

export default pricing;
