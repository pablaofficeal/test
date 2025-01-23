import { Play, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface MusicCardProps {
  title: string;
  artist: string;
  cover: string;
  price: number;
  onPlay: () => void;
  onAddToCart: () => void;
}

export const MusicCard = ({ title, artist, cover, price, onPlay, onAddToCart }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    onPlay();
    toast({
      title: isPlaying ? "Пауза" : "Воспроизведение",
      description: `${title} - ${artist}`,
    });
  };

  const handleAddToCart = () => {
    onAddToCart();
    toast({
      title: "Добавлено в корзину",
      description: `${title} - ${artist}`,
    });
  };

  return (
    <div className="music-card group">
      <div className="relative aspect-square mb-3">
        <img src={cover} alt={title} className="w-full h-full object-cover rounded-md" />
        <button
          onClick={handlePlay}
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <Play className={`h-12 w-12 text-white ${isPlaying ? 'animate-music-pulse' : ''}`} />
        </button>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate">{artist}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold">${price}</span>
          <button
            onClick={handleAddToCart}
            className="p-2 rounded-full bg-primary hover:bg-primary-hover transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};