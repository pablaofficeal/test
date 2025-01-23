"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navbar_1 = require("@/components/Navbar");
var FeaturedSection_1 = require("@/components/FeaturedSection");
var Index = function () {
    return (<div className="min-h-screen">
      <Navbar_1.Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 -z-10"/>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Откройте для себя новую музыку
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Тысячи треков от независимых артистов. Покупайте и поддерживайте любимых исполнителей.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-colors">
              Начать поиск
            </button>
          </div>
        </section>

        {/* Featured Tracks */}
        <FeaturedSection_1.FeaturedSection />
      </main>
    </div>);
};
exports.default = Index;
