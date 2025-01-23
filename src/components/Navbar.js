"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
var Navbar = function () {
    return (<nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <react_router_dom_1.Link to="/" className="flex items-center space-x-2">
            <lucide_react_1.Music2 className="h-6 w-6 text-primary"/>
            <span className="text-xl font-bold gradient-text">MusicStore</span>
          </react_router_dom_1.Link>
          
          <div className="flex items-center space-x-6">
            <react_router_dom_1.Link to="/catalog" className="hover:text-primary transition-colors">
              Каталог
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/cart" className="relative">
              <lucide_react_1.ShoppingCart className="h-6 w-6 hover:text-primary transition-colors"/>
              <span className="absolute -top-2 -right-2 bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </react_router_dom_1.Link>
          </div>
        </div>
      </div>
    </nav>);
};
exports.Navbar = Navbar;
