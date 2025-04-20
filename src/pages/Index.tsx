import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-kendini-beige">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-normal text-kendini-brown mb-6 tracking-wider">
                KENDINI SEV
              </h1>
              <p className="text-xl md:text-2xl text-kendini-black/80 max-w-2xl mb-10">
                Минималистичные ароматы для вашего дома
              </p>
              <Button 
                asChild
                className="bg-kendini-brown hover:bg-kendini-brown/90 text-white rounded-none px-8 py-6"
              >
                <Link to="/products">
                  Смотреть каталог
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-normal text-kendini-brown mb-12 text-center tracking-wide">
              Наши категории
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Диффузоры",
                  description: "Наполните ваш дом изысканными ароматами с помощью наших диффузоров",
                  image: "/placeholder.svg",
                  link: "/products"
                },
                {
                  title: "Автодиффузоры",
                  description: "Создайте приятную атмосферу в вашем автомобиле с нашими автомобильными диффузорами",
                  image: "/placeholder.svg",
                  link: "/products"
                },
                {
                  title: "Свечи",
                  description: "Наши ароматические свечи создадут неповторимую атмосферу в вашем доме",
                  image: "/placeholder.svg",
                  link: "/products"
                }
              ].map((category, index) => (
                <div key={index} className="group">
                  <Link to={category.link} className="block">
                    <div className="overflow-hidden mb-4 bg-kendini-gray aspect-square flex items-center justify-center">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-1/2 h-1/2 object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-normal text-kendini-brown mb-2">{category.title}</h3>
                    <p className="text-kendini-black/70 text-sm">{category.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-kendini-beige">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 bg-kendini-gray aspect-square flex items-center justify-center">
                <img src="/placeholder.svg" alt="О нас" className="w-1/2 h-1/2 object-contain" />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-normal text-kendini-brown mb-6 tracking-wide">О Kendini Sev</h2>
                <p className="text-kendini-black/80 mb-4">
                  Kendini Sev — это минималистичный бренд ароматов для дома, 
                  который стремится создать идеальную атмосферу в вашем пространстве.
                </p>
                <p className="text-kendini-black/80 mb-6">
                  Наши продукты изготовлены из натуральных компонентов высочайшего качества, 
                  чтобы обеспечить вам безопасный и приятный опыт использования.
                </p>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-kendini-brown text-kendini-brown hover:bg-kendini-brown hover:text-white rounded-none px-6"
                >
                  <Link to="/instructions">
                    Узнать больше
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
