import { FeaturedSection } from "@/components/FeaturedSection";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Поиск треков..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Genre Filters */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 gradient-text">Жанры</h2>
          <div className="flex flex-wrap gap-2">
            {["Электронная", "Рок", "Поп", "Хип-хоп", "Джаз", "Классическая"].map((genre) => (
              <button
                key={genre}
                className="px-4 py-2 rounded-full bg-card hover:bg-primary/20 transition-colors"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <FeaturedSection />
      </main>
    </div>
  );
};

export default Catalog;