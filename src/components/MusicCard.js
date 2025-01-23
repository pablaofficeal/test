"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicCard = void 0;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var use_toast_1 = require("@/components/ui/use-toast");
var MusicCard = function (_a) {
    var title = _a.title, artist = _a.artist, cover = _a.cover, price = _a.price, onPlay = _a.onPlay, onAddToCart = _a.onAddToCart;
    var _b = (0, react_1.useState)(false), isPlaying = _b[0], setIsPlaying = _b[1];
    var toast = (0, use_toast_1.useToast)().toast;
    var handlePlay = function () {
        setIsPlaying(!isPlaying);
        onPlay();
        toast({
            title: isPlaying ? "Пауза" : "Воспроизведение",
            description: "".concat(title, " - ").concat(artist),
        });
    };
    var handleAddToCart = function () {
        onAddToCart();
        toast({
            title: "Добавлено в корзину",
            description: "".concat(title, " - ").concat(artist),
        });
    };
    return (<div className="music-card group">
      <div className="relative aspect-square mb-3">
        <img src={cover} alt={title} className="w-full h-full object-cover rounded-md"/>
        <button onClick={handlePlay} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <lucide_react_1.Play className={"h-12 w-12 text-white ".concat(isPlaying ? 'animate-music-pulse' : '')}/>
        </button>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate">{artist}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold">${price}</span>
          <button onClick={handleAddToCart} className="p-2 rounded-full bg-primary hover:bg-primary-hover transition-colors">
            <lucide_react_1.ShoppingCart className="h-4 w-4"/>
          </button>
        </div>
      </div>
    </div>);
};
exports.MusicCard = MusicCard;
