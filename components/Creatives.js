import Image from "next/image";

function Creatives() {
  return (
    <div className="bg-custom-gray4">
      <div className="container py-12 lg:py-[190px] px-4">
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-20 pb-20 ">
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="heading-lg lg:text-[32px]">
              Smart template for creatives
            </h1>
            <h2 className="mt-5 text-custom-orange text-[19px] lg:text-[26px] font-Montserrat">
              professional tools
            </h2>
            <p className="mt-5 text-custom-gray3">
              Professional tools & Design makes our investments more valuable.
              And that’s how we work with our startups — as partners.
            </p>
            <h2 className="mt-5 text-custom-orange text-[19px] lg:text-[26px] font-Montserrat">
              professional products
            </h2>
            <p className="mt-5 text-custom-gray3">
              Professional tools & Design makes our investments more valuable.
              And that’s how we work with our startups — as partners.
            </p>
            <div className="mt-5 flex gap-4">
              <Image
                src="/images/about/about.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="mt-5 lg:ml-8">
                <p className=" text-custom-gray">
                  Build on the principles of excellence. For all the things you
                  want to do. For the things you love.
                </p>
                <p className="mt-5 text-custom-gray3 text-sm">
                  Jonathan Guerrero, CEO
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/images/about/about2.jpg"
              alt=""
              width={533}
              height={485}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creatives;
