import React from "react";
import ImageGrid from "../components/ImageGrid";
import Layout from "../components/Layout";

const products = [
  { id: 1, name: "product1", img: "/images/products/product1.jpg" },
  { id: 2, name: "product2", img: "/images/products/product2.jpg" },
  { id: 3, name: "product3", img: "/images/products/product3.jpg" },
  { id: 4, name: "product4", img: "/images/products/product4.jpg" },
  { id: 5, name: "product5", img: "/images/products/product5.jpg" },
  { id: 6, name: "product6", img: "/images/products/product6.jpg" },
  { id: 7, name: "product7", img: "/images/products/product7.jpg" },
  { id: 8, name: "product8", img: "/images/products/product8.jpg" },
  { id: 9, name: "product9", img: "/images/products/product9.jpg" },
  { id: 10, name: "product10", img: "/images/products/product10.jpg" },
  { id: 11, name: "product11", img: "/images/products/product11.jpg" },
  { id: 12, name: "product12", img: "/images/products/product12.jpg" },
];

function galleryPage() {
  const heading = "For all the things you want to do.";
  const text = "There's a template for everything";

  return (
    <Layout heading={heading} text={text}>
      <div className="bg-white">
        <div className="lg:container py-20 px-4 lg:py-32">
          <div className="lg:container py-16 lg:px-4 grid lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ImageGrid key={product.id} image={product.img} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default galleryPage;
