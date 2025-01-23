import { ShoppingCart, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Music2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold gradient-text">MusicStore</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/catalog" className="hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 hover:text-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};