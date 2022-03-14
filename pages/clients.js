import React from "react";
import Comments from "../components/Comments";
import Layout from "../components/Layout";
import { clientList } from "../data/clientList";

function clients() {
  const heading = "Our dear clients";
  const text = "Beautifully Minimal";

  return (
    <Layout heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <div className="lg:container py-12 lg:py-[190px] px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {clientList.map((client) => (
              <div
                key={client.id}
                className="flex gap-14 lg:gap-20 items-center"
              >
                <div className="">
                  <img src={client.img} alt="" width={500} />
                </div>
                <div className="">
                  <h2 className="heading-sm">{client.name}</h2>
                  <p className="mt-5 text-custom-gray3">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Comments />
      </div>
    </Layout>
  );
}

export default clients;
