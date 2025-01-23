import { MusicCard } from "./MusicCard";
import { useToast } from "@/components/ui/use-toast";

const FEATURED_TRACKS = [
  {
    id: 1,
    title: "Summer Vibes",
    artist: "Tropical Beat",
    cover: "/placeholder.svg",
    price: 1.99
  },
  {
    id: 2,
    title: "Night Drive",
    artist: "Electronic Dreams",
    cover: "/placeholder.svg",
    price: 2.49
  },
  {
    id: 3,
    title: "Chill Afternoon",
    artist: "Lofi Beats",
    cover: "/placeholder.svg",
    price: 1.49
  },
  {
    id: 4,
    title: "Dance Floor",
    artist: "House Masters",
    cover: "/placeholder.svg",
    price: 2.99
  }
];

export const FeaturedSection = () => {
  const { toast } = useToast();

  const handlePlay = () => {
    console.log("Playing track...");
  };

  const handleAddToCart = () => {
    console.log("Adding to cart...");
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Популярные треки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURED_TRACKS.map((track) => (
            <MusicCard
              key={track.id}
              title={track.title}
              artist={track.artist}
              cover={track.cover}
              price={track.price}
              onPlay={handlePlay}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};