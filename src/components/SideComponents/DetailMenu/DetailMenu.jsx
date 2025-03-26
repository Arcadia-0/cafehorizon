import React from "react";
import st1 from "../../../assets/detailmenü/1.png";
import st2 from "../../../assets/detailmenü/2.png";
import st3 from "../../../assets/detailmenü/3.png";  // Örnek bir espresso görseli
import st4 from "../../../assets/detailmenü/4.png";    // Örnek bir pankek görseli


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
        image: st1,
        price: "15₺",
      },
      {
        id: 4,
        name: "Dibek Kahvesi",
        description: "Klasik Türk kahvesi, yoğun ve aromatik bir tat.",
        image: st2,
        price: "15₺",
      },
    ],
  },
  {
    id: 2,
    name: "Espresso Bazlı Kahveler",
    products: [
      {
        id: 2,
        name: "Espresso",
        description: "Yoğun aromalı, sade espresso.",
        image: st3,
        price: "18₺",
      },
    ],
  },
  {
    id: 3,
    name: "Pankekler",
    products: [
      {
        id: 3,
        name: "Pankek",
        description: "Lezzetli, yumuşak pankekler.",
        image: st4,
        price: "20₺",
      },
    ],
  },
  {
    id: 4,
    name: "Kruvasanlar",
    products: [
      {
        id: 5,
        name: "Kruvasan",
        description: "Taze pişirilmiş, yumuşak kruvasan.",
        image: st4,
        price: "12₺",
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
