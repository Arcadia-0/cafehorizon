import React from "react";
import coffee_1 from "../../../assets/detailmenü/coffee_1.png";
import coffee_2 from "../../../assets/detailmenü/coffee_2.png";
import coffee_3 from "../../../assets/detailmenü/coffee_3.png";
import coffee_4 from "../../../assets/detailmenü/coffee_4.png";
import coffee_5 from "../../../assets/detailmenü/coffee_5.png";
import coffee_6 from "../../../assets/detailmenü/coffee_6.png";
import coffee_7 from "../../../assets/detailmenü/coffee_7.png";
import koktely_1 from "../../../assets/detailmenü/kokteyl_1.png";
import koktely_2 from "../../../assets/detailmenü/kokteyl_2.png";
import koktely_3 from "../../../assets/detailmenü/kokteyl_3.png";
import koktely_4 from "../../../assets/detailmenü/kokteyl_4.png";
import croissant_1 from "../../../assets/detailmenü/croissant_1.png";
import croissant_2 from "../../../assets/detailmenü/croissant_2.png";
import croissant_3 from "../../../assets/detailmenü/croissant_3.png";
import pancake_1 from "../../../assets/detailmenü/pancake_1.png";
import pancake_2 from "../../../assets/detailmenü/pancake_2.png";
import pancake_3 from "../../../assets/detailmenü/pancake_3.png";
import bowl_1 from "../../../assets/detailmenü/bowl_1.png";
import bowl_2 from "../../../assets/detailmenü/bowl_2.png";
import sandvic_1 from "../../../assets/detailmenü/sandvic_1.png";
import sandvic_2 from "../../../assets/detailmenü/sandvic_2.png";
import sandvic_3 from "../../../assets/detailmenü/sandvic_3.png";

// Kategoriler ve ürünler
const categories = [
  {
    id: 1,
    name: "Kahveler",
    products: [
      {
        id: 1,
        name: "Mocha",
        description: "Çikolata ve kahvenin mükemmel birleşimi, yoğun kıvamı ve aromatik tadı ile damakta kalıcı bir lezzet bırakır.",
        image: coffee_1,
        price: "180₺",
      },
      {
        id: 2,
        name: "Flat White",
        description: "Üzerinde ince süt köpüğü ve Espresso’dan oluşan yoğun bir lezzet.",
        image: coffee_2,
        price: "185₺",
      },
      {
        id: 3,
        name: "Latte",
        description: "Espresso üzerine süt eklenerek hazırlanan, yumuşak ve hafif bir kahve.",
        image: coffee_3,
        price: "190₺",
      },
      {
        id: 4,
        name: "Americano",
        description: "Yoğun espresso üzerine sıcak su eklenerek hazırlanan sade ve yumuşak bir kahve içeceği.",
        image: coffee_4,
        price: "180₺",
      },
      {
        id: 5,
        name: "Espresso",
        description: "Sade ve yoğun espresso, kahveseverlerin tercih ettiği klasik bir içecek.",
        image: coffee_5,
        price: "160₺",
      },
      {
        id: 6,
        name: "Ice Mocha",
        description: "Beyaz çikolata ve espresso karışımının soğuk sunumu, tatlı bir kahve keyfi.",
        image: coffee_6,
        price: "190₺",
      },
      {
        id: 7,
        name: "Ice White Mocha",
        description: "Beyaz çikolata ve espresso karışımı, soğuk bir içecek olarak sunulur.",
        image: coffee_7,
        price: "190₺",
      },
    ],
  },
  {
    id: 2,
    name: "Kokteyller",
    products: [
      {
        id: 1,
        name: "Raspberry Mojito",
        description: "Ferahlık ve tatlılık arasındaki mükemmel dengeyi yakalayan, böğürtlen ve nane ile tatlandırılmış kokteyl.",
        image: koktely_1,
        price: "190₺",
      },
      {
        id: 2,
        name: "Blueberry Mojito",
        description: "Yaban mersini ve nane ile ferahlatıcı bir tat sunan, yaz akşamları için ideal bir kokteyl.",
        image: koktely_2,
        price: "190₺",
      },
      {
        id: 3,
        name: "Mango Mojito",
        description: "Tropikal mangonun tatlılığı ile ferahlatıcı nane ve lime birleşimi.",
        image: koktely_3,
        price: "190₺",
      },
      {
        id: 4,
        name: "Bitki Çayı",
        description: "Çeşitli bitkilerden elde edilen, sakinleştirici ve sağlıklı bir içecek.",
        image: koktely_4,
        price: "120₺",
      },
    ],
  },
  {
    id: 3,
    name: "Kruvasanlar",
    products: [
      {
        id: 1,
        name: "Çikolatalı Kruvasan",
        description: "İçinde yoğun çikolata bulunan, çıtır çıtır dış yüzeyiyle tatlı bir deneyim.",
        image: croissant_1,
        price: "200₺",
      },
      {
        id: 2,
        name: "Klasik Kruvasan",
        description: "Taze ve çıtır hamuru, zengin tereyağlı içeriğiyle geleneksel Fransız kruvasanı.",
        image: croissant_3,
        price: "180₺",
      },
      {
        id: 3,
        name: "Meyveli Kruvasan",
        description: "Taze meyvelerle doldurulmuş, tereyağlı ve çıtır çıtır hamuruyla servis edilen kruvasan.",
        image: croissant_2,
        price: "210₺",
      },
    ],
  },
  {
    id: 4,
    name: "Pancakeler",
    products: [
      {
        id: 1,
        name: "Meyveli Pancake",
        description: "Yumuşacık pancake, taze meyveler ve doğal bal ile tatlandırılmış.",
        image: pancake_1,
        price: "250₺",
      },
      {
        id: 2,
        name: "Çikolatalı Pancake",
        description: "Eritilmiş çikolata ve krema ile tatlandırılmış, yoğun lezzetli bir pancake.",
        image: pancake_2,
        price: "240₺",
      },
      {
        id: 3,
        name: "Klasik Pancake",
        description: "Sade pancake, taze meyveler ve şurup ile servis edilen klasik bir lezzet.",
        image: pancake_3,
        price: "220₺",
      },
    ],
  },
  {
    id:5,
    name:"Bowllar",
    products:[
      {
        id:1,
        name:"Orman Meyveli Bowl",
        description:"Taze orman meyveleri ve granola ile hazırlanmış, besleyici ve sağlıklı bir tat. Sabah kahvaltısı veya atıştırmalık olarak ideal.",
        image: bowl_1,
        price:"300₺",
      },
      {
        id:2,
        name:"Avokado Bademli Bowl",
        description:"Avokado, badem ve diğer sağlıklı malzemelerle hazırlanan enerji verici ve besleyici bir bowl.",
        image: bowl_2,
        price:"300₺",
      },
    ]
  },
  {
    id:6,
    name:"Sandviçler",
    products:[
      {
        id:1,
        name:"Hindi Fümeli Sandviç",
        description:"Fümelenmiş hindi, taze sebzeler ve nefis ekmek ile hazırlanmış doyurucu bir sandviç.",
        image: sandvic_1,
        price:"300₺",
      },
      {
        id:2,
        name:"Beş Peynirli Sandviç",
        description:"Beş farklı peynirin bir araya gelmesiyle lezzetli ve zengin bir sandviç.",
        image: sandvic_2,
        price:"300₺",
      },
      {
        id:3,
        name:"Avokadolu Vegan Sandviç",
        description:"Avokado, taze sebzeler ve vegan malzemelerle hazırlanan sağlıklı bir sandviç.",
        image: sandvic_3,
        price:"300₺",
      },
    ]
  }
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
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transition-all duration-300 ease-in-out"
                />
                <div className="flex flex-col justify-between p-6 flex-grow">
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
