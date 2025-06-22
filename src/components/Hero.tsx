
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              India's<br />
              <span className="text-yellow-300">Favorite</span><br />
              Shopping<br />
              Destination
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Discover millions of products at unbeatable prices. From electronics to fashion, we've got everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group">
                Shop Now
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors">
                Download App
              </button>
            </div>
          </div>
          <div className="hidden md:block animate-scale-in">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">📱</div>
                    <div className="text-sm">Electronics</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">👗</div>
                    <div className="text-sm">Fashion</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🏠</div>
                    <div className="text-sm">Home</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🛒</div>
                    <div className="text-sm">Groceries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
