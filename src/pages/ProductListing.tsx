
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { ChevronDown, Filter, Grid, List } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Redmi Note 13 Pro 5G',
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
    name: 'Samsung Galaxy M34',
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
    name: 'OnePlus Nord CE 3',
    price: 26999,
    originalPrice: 29999,
    image: '/placeholder.svg',
    rating: 4.2,
    reviews: 650,
    brand: 'OnePlus',
    discount: 10
  },
  {
    id: 4,
    name: 'Realme 11 Pro',
    price: 25999,
    originalPrice: 28999,
    image: '/placeholder.svg',
    rating: 4.0,
    reviews: 445,
    brand: 'Realme',
    discount: 10
  },
  {
    id: 5,
    name: 'Vivo V29e',
    price: 28999,
    originalPrice: 31999,
    image: '/placeholder.svg',
    rating: 4.1,
    reviews: 320,
    brand: 'Vivo',
    discount: 9
  },
  {
    id: 6,
    name: 'Oppo Reno 10',
    price: 32999,
    originalPrice: 35999,
    image: '/placeholder.svg',
    rating: 4.2,
    reviews: 280,
    brand: 'Oppo',
    discount: 8
  }
];

const brands = ['Xiaomi', 'Samsung', 'OnePlus', 'Realme', 'Vivo', 'Oppo'];
const priceRanges = [
  { label: 'Under ₹15,000', min: 0, max: 15000 },
  { label: '₹15,000 - ₹25,000', min: 15000, max: 25000 },
  { label: '₹25,000 - ₹35,000', min: 25000, max: 35000 },
  { label: 'Above ₹35,000', min: 35000, max: Infinity }
];

const ProductListing = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(product => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          Home &gt; Electronics &gt; Mobiles
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Smartphones
            </h1>
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* View Toggle */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white rounded-lg shadow-sm p-6 h-fit`}>
            <h3 className="font-semibold text-gray-800 mb-4">Filters</h3>

            {/* Brand Filter */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Brand</h4>
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-600">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <label key={range.label} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range.label}
                      checked={selectedPriceRange === range.label}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-600">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedBrands([]);
                setSelectedPriceRange('');
              }}
              className="text-orange-500 text-sm hover:underline"
            >
              Clear All Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-3 py-2 text-gray-600 hover:text-orange-500">Previous</button>
                <button className="px-3 py-2 bg-orange-500 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-600 hover:text-orange-500">2</button>
                <button className="px-3 py-2 text-gray-600 hover:text-orange-500">3</button>
                <button className="px-3 py-2 text-gray-600 hover:text-orange-500">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductListing;
