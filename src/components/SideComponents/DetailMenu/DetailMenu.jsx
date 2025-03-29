import React from "react";
import product_1 from "../../../assets/detailmenü/product_1.png"
import product_2 from "../../../assets/detailmenü/product_2.png"
import product_3 from "../../../assets/detailmenü/product_3.png"
import product_4 from "../../../assets/detailmenü/product_4.png"
import product_5 from "../../../assets/detailmenü/product_5.png"
import product_6 from "../../../assets/detailmenü/product_6.png"
import product_7 from "../../../assets/detailmenü/product_7.png"
import product_8 from "../../../assets/detailmenü/product_8.png"




// Kategoriler ve ürünler
const categories = [
  {
    id: 1,
    name: "Türk Kahveleri",
    products: [
      {
        id: 1,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_1,
        price: "15₺",
      },
      {
        id: 2,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_2,
        price: "15₺",
      },
      {
        id: 3,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_3,
        price: "15₺",
      },
      {
        id: 4,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_4,
        price: "15₺",
      },
      {
        id: 5,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_5,
        price: "15₺",
      },
      {
        id: 6,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_6,
        price: "15₺",
      },
      {
        id: 7,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_7,
        price: "15₺",
      },
      {
        id: 8,
        name: "Türk Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: product_8,
        price: "15₺",
      },
    ],
  },
  
  
  
];

const DetailMenu = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Menü</h1>

      {/* Kategorileri Listele */}
      {categories.map((category) => (
        <div key={category.id} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer group relative rounded-lg overflow-hidden shadow-lg bg-gray-100 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 group-hover:opacity-70 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl font-semibold text-white group-hover:text-yellow-400 transform transition-all duration-300">
                    {product.name}
                  </h2>
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.description}
                  </p>
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl mt-2 font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailMenu;
