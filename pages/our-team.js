import Layout from "../components/Layout";
import { staffs } from "../data/staffs";

function ourTeamPage() {
  const heading = "Our Team";
  const text = "Beautifully Minimal";

  return (
    <Layout heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <div className="lg:container px-4 py-16 lg:py-[190px] ">
          <div className="grid lg:grid-cols-4 gap-7 lg:gap-5">
            {staffs.map((staff) => (
              <div
                key={staff.id}
                className="flex flex-col items-center gap-4 lg:gap-5 mb-8"
              >
                <img src={staff.img} alt="" />
                <h3 className="text-lg font-Montserrat text-custom-gray lg:heading-lg">
                  {staff.name}
                </h3>
                <p className="text-sm text-custom-gray3">{staff.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ourTeamPage;

// import React from "react";

// function team() {
//   return <div>team</div>;
// }

// export default team;
