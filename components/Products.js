import React from "react";
import Link from "next/link";
import Gallery from "react-grid-gallery";
import ImageGrid from "./ImageGrid";
import { productList } from "../data/productList";

// const products = [
//   {
//     src: "/images/products/product1.jpg",
//     thumbnail: "/images/products/product1.jpg",
//     thumbnailWidth: 270,
//     thumbnailHeight: 270,
//   },
//   {
//     src: "/images/products/product2.jpg",
//     thumbnail: "/images/products/product2.jpg",
//     thumbnailWidth: 560,
//     thumbnailHeight: 270,
//   },
//   {
//     src: "/images/products/product3.jpg",
//     thumbnail: "/images/products/product3.jpg",
//     thumbnailWidth: 270,
//     thumbnailHeight: 270,
//   },
//   {
//     src: "/images/products/product4.jpg",
//     thumbnail: "/images/products/product4.jpg",
//     thumbnailWidth: 560,
//     thumbnailHeight: 270,
//   },
//   {
//     src: "/images/products/product5.jpg",
//     thumbnail: "/images/products/product5.jpg",
//     thumbnailWidth: 270,
//     thumbnailHeight: 270,
//   },
//   {
//     src: "/images/products/product6.jpg",
//     thumbnail: "/images/products/product6.jpg",
//     thumbnailWidth: 270,
//     thumbnailHeight: 270,
//   },
// ];

function Products() {
  return (
    <div className="bg-white">
      <div className="lg:container py-20 px-4 lg:py-32">
        <div className="lg:w-2/4">
          <div className="heading-lg">
            <h2 className="">For all the things you want to do.</h2>
            <h2 className="mt-2">For the things you love.</h2>
          </div>
        </div>

        {/* <div className="grid mx-auto">
          <Gallery
            images={products}
            backdropClosesModal={true}
            enableImageSelection={false}
            rowHeight={270}
            margin={10}
            tagStyle={{}}
          />
        </div> */}

        <div className="lg:container py-16 px-4 grid lg:grid-cols-3 gap-6">
          {productList.map((product) => (
            <ImageGrid key={product.id} image={product.img} />
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <Link href="/gallery">
            <button className="px-10 lg:px-16 py-3 lg:py-4 bg-white hover:bg-custom-gray text-custom-gray hover:text-white duration-300 text-sm border-2 border-slate-300 hover:border-custom-gray font-Montserrat rounded-full uppercase">
              see more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
