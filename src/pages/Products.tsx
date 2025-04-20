import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Имитация данных для продуктов
const products = {
  diffusers: [
    { 
      id: 1, 
      name: "Лаванда и ваниль", 
      price: "2 400 ₽", 
      image: "/placeholder.svg",
      description: "Успокаивающий аромат лаванды в сочетании с нежной ванилью"
    },
    { 
      id: 2, 
      name: "Сандал и кедр", 
      price: "2 600 ₽", 
      image: "/placeholder.svg",
      description: "Древесный аромат с нотами сандала и кедра"
    },
    { 
      id: 3, 
      name: "Цитрус и мята", 
      price: "2 400 ₽", 
      image: "/placeholder.svg",
      description: "Освежающий аромат цитрусовых с нотками мяты"
    }
  ],
  autoDiffusers: [
    { 
      id: 1, 
      name: "Бергамот", 
      price: "1 200 ₽", 
      image: "/placeholder.svg",
      description: "Освежающий цитрусовый аромат для вашего автомобиля"
    },
    { 
      id: 2, 
      name: "Жасмин", 
      price: "1 200 ₽", 
      image: "/placeholder.svg",
      description: "Нежный цветочный аромат для поездок в городе"
    }
  ],
  candles: [
    { 
      id: 1, 
      name: "Пачули и амбра", 
      price: "1 800 ₽", 
      image: "/placeholder.svg",
      description: "Глубокий, насыщенный аромат с восточными нотами"
    },
    { 
      id: 2, 
      name: "Белый чай", 
      price: "1 600 ₽", 
      image: "/placeholder.svg",
      description: "Нежный, легкий аромат с нотами белого чая"
    },
    { 
      id: 3, 
      name: "Свежий хлопок", 
      price: "1 600 ₽", 
      image: "/placeholder.svg",
      description: "Чистый, свежий аромат с нотами хлопка"
    }
  ]
};

const ProductCard = ({ product }: { product: typeof products.diffusers[0] }) => {
  return (
    <div className="group">
      <div className="bg-kendini-gray aspect-square mb-4 flex items-center justify-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-1/2 h-1/2 object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-normal text-kendini-brown">{product.name}</h3>
      <p className="text-sm text-kendini-black/70 mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-kendini-black font-medium">{product.price}</span>
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-none border-kendini-brown text-kendini-brown hover:bg-kendini-brown hover:text-white"
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 bg-kendini-beige">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-normal text-kendini-brown mb-8 text-center tracking-wide">
              Наши товары
            </h1>
            
            <Tabs defaultValue="diffusers" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white border border-kendini-brown/20">
                  <TabsTrigger 
                    value="diffusers"
                    className="data-[state=active]:bg-kendini-brown data-[state=active]:text-white rounded-none"
                  >
                    Диффузоры
                  </TabsTrigger>
                  <TabsTrigger 
                    value="autoDiffusers"
                    className="data-[state=active]:bg-kendini-brown data-[state=active]:text-white rounded-none"
                  >
                    Автодиффузоры
                  </TabsTrigger>
                  <TabsTrigger 
                    value="candles"
                    className="data-[state=active]:bg-kendini-brown data-[state=active]:text-white rounded-none"
                  >
                    Свечи
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="diffusers" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.diffusers.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="autoDiffusers" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.autoDiffusers.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="candles" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.candles.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
