import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-kendini-beige border-t border-kendini-brown/20 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-normal mb-4 text-kendini-brown">Kendini Sev</h3>
            <p className="text-sm text-kendini-black/80 max-w-xs">
              Минималистичный бренд ароматов для дома, создающий атмосферу уюта и гармонии.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-normal mb-4 text-kendini-brown">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-kendini-black/80 hover:text-kendini-brown transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-kendini-black/80 hover:text-kendini-brown transition-colors">
                  Товары
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-sm text-kendini-black/80 hover:text-kendini-brown transition-colors">
                  Инструкции
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-normal mb-4 text-kendini-brown">Контакты</h3>
            <address className="not-italic text-sm text-kendini-black/80">
              <p>Email: info@kendinisev.ru</p>
              <p className="mt-2">Телефон: +7 (999) 123-45-67</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-kendini-brown/10 text-center text-sm text-kendini-black/60">
          © {new Date().getFullYear()} Kendini Sev. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
