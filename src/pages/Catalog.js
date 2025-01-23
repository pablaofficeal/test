"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FeaturedSection_1 = require("@/components/FeaturedSection");
var input_1 = require("@/components/ui/input");
var lucide_react_1 = require("lucide-react");
var Catalog = function () {
    return (<div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input_1.Input type="search" placeholder="Поиск треков..." className="pl-10"/>
            <lucide_react_1.Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>
          </div>
        </div>

        {/* Genre Filters */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 gradient-text">Жанры</h2>
          <div className="flex flex-wrap gap-2">
            {["Электронная", "Рок", "Поп", "Хип-хоп", "Джаз", "Классическая"].map(function (genre) { return (<button key={genre} className="px-4 py-2 rounded-full bg-card hover:bg-primary/20 transition-colors">
                {genre}
              </button>); })}
          </div>
        </div>

        <FeaturedSection_1.FeaturedSection />
      </main>
    </div>);
};
exports.default = Catalog;
