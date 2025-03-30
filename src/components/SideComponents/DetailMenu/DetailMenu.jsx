import React from "react";
import coffee_1 from "../../../assets/detailmenü/coffee_1.png";
import coffee_2 from "../../../assets/detailmenü/coffee_2.png";
import coffee_3 from "../../../assets/detailmenü/coffee_3.png";
import coffee_4 from "../../../assets/detailmenü/coffee_4.png";
import coffee_5 from "../../../assets/detailmenü/coffee_5.png";
import coffee_6 from "../../../assets/detailmenü/coffee_6.png";
import coffee_7 from "../../../assets/detailmenü/coffee_7.png";
import coffee_8 from "../../../assets/detailmenü/coffee_8.png";
import croissant_1 from "../../../assets/detailmenü/croissant_1.png";
import croissant_2 from "../../../assets/detailmenü/croissant_2.png";
import croissant_3 from "../../../assets/detailmenü/croissant_3.png";
import pancake_1 from "../../../assets/detailmenü/pancake_1.png";
import pancake_2 from "../../../assets/detailmenü/pancake_2.png";
import pancake_3 from "../../../assets/detailmenü/pancake_3.png";

// Kategoriler ve ürünler
const categories = [
  {
    id: 1,
    name: "Kahveler",
    products: [
      {
        id: 1,
        name: "Türk Kahvesi",
        description: "Yoğun kıvamı ve aromatik tadıyla geleneksel Türk kahvesi.",
        image: coffee_1,
        price: "90₺",
      },
      {
        id: 2,
        name: "Dibek Kahvesi",
        description: "Köy usulü dibek taşında dövülerek yapılan, yoğun ve lezzetli bir kahve.",
        image: coffee_2,
        price: "95₺",
      },
      {
        id: 3,
        name: "Americano",
        description: "Espresso üzerine sıcak su eklenerek hazırlanan hafif ve aromatik bir kahve.",
        image: coffee_3,
        price: "90₺",
      },
      {
        id: 4,
        name: "Ice Mocha",
        description: "Buzlu, çikolata ve kahvenin muazzam birleşimi ile ferahlatıcı bir tat.",
        image: coffee_4,
        price: "190₺",
      },
      {
        id: 5,
        name: "Latte",
        description: "Sütle harmanlanmış yumuşak ve kremamsı bir espresso içeceği.",
        image: coffee_5,
        price: "150₺",
      },
      {
        id: 6,
        name: "White Mocha",
        description: "Beyaz çikolata ve espresso karışımı, hafif tatlı bir içecek.",
        image: coffee_6,
        price: "190₺",
      },
      {
        id: 7,
        name: "Cappuccino",
        description: "Kremamsı süt köpüğü ve espresso karışımından yapılan klasik bir içecek.",
        image: coffee_7,
        price: "150₺",
      },
      {
        id: 8,
        name: "Espresso",
        description: "Yoğun ve derin aromalı, küçük ama güçlü bir kahve.",
        image: coffee_8,
        price: "140₺",
      },
    ],
  },
  {
    id: 2,
    name: "Kruvasanlar",
    products: [
      {
        id: 1,
        name: "Çikolatalı Kruvasan",
        description: "İçinde eritilmiş çikolata bulunan, gevrek dış yüzeyi ile mükemmel bir tat.",
        image: croissant_1,
        price: "320₺",
      },
      {
        id: 2,
        name: "Peynirli Kruvasan",
        description: "Zengin peynir dolgusu ile sarılmış çıtır çıtır bir kruvasan.",
        image: croissant_3,
        price: "310₺",
      },
      {
        id: 3,
        name: "Klasik Kruvasan",
        description: "Tereyağlı ve çıtır çıtır hamuruyla geleneksel Fransız kruvasanı.",
        image: croissant_2,
        price: "290₺",
      },
    ],
  },
  {
    id: 3,
    name: "Pancakeler",
    products: [
      {
        id: 1,
        name: "Meyveli Pancake",
        description: "Taze meyveler ve bal ile sunulmuş yumuşacık pancake.",
        image: pancake_1,
        price: "250₺",
      },
      {
        id: 2,
        name: "Çikolatalı Pancake",
        description: "Eritilmiş çikolata ve kremayla tatlandırılmış, yoğun lezzetli bir pancake.",
        image: pancake_2,
        price: "240₺",
      },
      {
        id: 3,
        name: "Klasik Pancake",
        description: "Sade ve nefis bir pancake, üzeri taze meyve ve şurup ile servis edilir.",
        image: pancake_3,
        price: "220₺",
      },
    ],
  },
];

const DetailMenu = () => {
  
  window.scrollTo(0,0);
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Menü</h1>

      {/* Kategorileri Listele */}
      {categories.map((category) => (
        <div key={category.id} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transition-all duration-300 ease-in-out"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                  <p className="text-primary font-bold text-lg mt-4">{product.price}</p>
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
