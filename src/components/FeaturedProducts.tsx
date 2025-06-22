
import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Redmi Note 13 Pro',
    price: 23999,
    originalPrice: 26999,
    image: '/placeholder.svg',
    rating: 4.3,
    reviews: 1250,
    brand: 'Xiaomi',
    discount: 11
  },
  {
    id: 2,
    name: 'Samsung 32" Smart TV',
    price: 18999,
    originalPrice: 22999,
    image: '/placeholder.svg',
    rating: 4.1,
    reviews: 890,
    brand: 'Samsung',
    discount: 17
  },
  {
    id: 3,
    name: 'Boat Airdopes 141',
    price: 1999,
    originalPrice: 2999,
    image: '/placeholder.svg',
    rating: 4.0,
    reviews: 5600,
    brand: 'boAt',
    discount: 33
  },
  {
    id: 4,
    name: 'Prestige Pressure Cooker 5L',
    price: 1899,
    originalPrice: 2499,
    image: '/placeholder.svg',
    rating: 4.4,
    reviews: 2100,
    brand: 'Prestige',
    discount: 24
  },
  {
    id: 5,
    name: 'Fabindia Cotton Kurta',
    price: 1599,
    originalPrice: 1999,
    image: '/placeholder.svg',
    rating: 4.2,
    reviews: 450,
    brand: 'Fabindia',
    discount: 20
  },
  {
    id: 6,
    name: 'Tata Salt 1kg',
    price: 25,
    originalPrice: 28,
    image: '/placeholder.svg',
    rating: 4.5,
    reviews: 8900,
    brand: 'Tata',
    discount: 11
  },
  {
    id: 7,
    name: 'Amul Butter 500g',
    price: 270,
    originalPrice: 290,
    image: '/placeholder.svg',
    rating: 4.6,
    reviews: 3200,
    brand: 'Amul',
    discount: 7
  },
  {
    id: 8,
    name: 'Nike Air Force 1',
    price: 7995,
    originalPrice: 8995,
    image: '/placeholder.svg',
    rating: 4.3,
    reviews: 125,
    brand: 'Nike',
    discount: 11
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked products just for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
