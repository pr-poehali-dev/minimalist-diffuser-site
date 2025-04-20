import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="w-full py-6 bg-kendini-beige border-b border-kendini-brown/20">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-normal tracking-widest text-kendini-brown">
          KENDINI SEV
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="space-x-1 md:space-x-4">
            <NavigationMenuItem>
              <Link to="/" className={cn(
                "px-3 py-2 text-sm text-kendini-black hover:text-kendini-brown transition-colors"
              )}>
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/products" className={cn(
                "px-3 py-2 text-sm text-kendini-black hover:text-kendini-brown transition-colors"
              )}>
                Товары
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/instructions" className={cn(
                "px-3 py-2 text-sm text-kendini-black hover:text-kendini-brown transition-colors"
              )}>
                Инструкции
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
