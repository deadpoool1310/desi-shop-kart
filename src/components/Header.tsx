
import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm">
        🎉 Free delivery on orders above ₹499 | Monsoon Sale Live!
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl px-3 py-2 rounded-lg">
              ShopIndia
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/wishlist" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Wishlist</span>
              </Link>
              <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm">Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Link>
              <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                <User className="h-5 w-5" />
                <span className="text-sm">Login</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-orange-500"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/wishlist" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </Link>
              <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart (3)</span>
              </Link>
              <Link to="/login" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
