import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Instructions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 bg-kendini-beige">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-normal text-kendini-brown mb-8 text-center tracking-wide">
              Инструкции по использованию
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 mb-10">
                <h2 className="text-2xl font-normal text-kendini-brown mb-6">Диффузоры</h2>
                
                <div className="mb-6">
                  <img src="/placeholder.svg" alt="Диффузор" className="w-40 h-40 object-contain mx-auto mb-4" />
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-kendini-brown/20">
                      <AccordionTrigger className="text-kendini-black hover:text-kendini-brown">
                        Как использовать
                      </AccordionTrigger>
                      <AccordionContent className="text-kendini-black/80">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Аккуратно снимите крышку с бутылки</li>
                          <li>Вставьте тростниковые палочки в бутылку</li>
                          <li>Для более интенсивного аромата используйте больше палочек</li>
                          <li>Переворачивайте палочки каждые 3-4 дня для освежения аромата</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-kendini-brown/20">
                      <AccordionTrigger className="text-kendini-black hover:text-kendini-brown">
                        Меры предосторожности
                      </AccordionTrigger>
                      <AccordionContent className="text-kendini-black/80">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Храните диффузор в недоступном для детей и домашних животных месте</li>
                          <li>Избегайте контакта жидкости с кожей и глазами</li>
                          <li>Размещайте на устойчивой поверхности</li>
                          <li>Не размещайте вблизи источников огня</li>
                          <li>Не употребляйте внутрь</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              
              <div className="bg-white p-8 mb-10">
                <h2 className="text-2xl font-normal text-kendini-brown mb-6">Автодиффузоры</h2>
                
                <div className="mb-6">
                  <img src="/placeholder.svg" alt="Автодиффузор" className="w-40 h-40 object-contain mx-auto mb-4" />
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-kendini-brown/20">
                      <AccordionTrigger className="text-kendini-black hover:text-kendini-brown">
                        Как использовать
                      </AccordionTrigger>
                      <AccordionContent className="text-kendini-black/80">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Снимите крышку с бутылки</li>
                          <li>Вставьте автомобильную клипсу в бутылку</li>
                          <li>Закрепите клипсу на вентиляционном отверстии автомобиля</li>
                          <li>Регулируйте интенсивность аромата, поворачивая клипсу</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-kendini-brown/20">
                      <AccordionTrigger className="text-kendini-black hover:text-kendini-brown">
                        Меры предосторожности
                      </AccordionTrigger>
                      <AccordionContent className="text-kendini-black/80">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Не размещайте вблизи источников тепла</li>
                          <li>Избегайте прямого контакта жидкости с обивкой автомобиля</li>
                          <li>Не устанавливайте в местах, где диффузор может мешать управлению автомобилем</li>
                          <li>Храните запасной флакон в вертикальном положении</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              
              <div className="bg-white p-8">
                <h2 className="text-2xl font-normal text-kendini-brown mb-6">Свечи</h2>
                
                <div className="mb-6">
                  <img src="/placeholder.svg" alt="Свеча" className="w-40 h-40 object-contain mx-auto mb-4" />
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-kendini-brown/20">
                      <AccordionTrigger className="text-kendini-black hover:text-kendini-brown">
                        Как использовать
                      </AccordionTrigger>
                      <AccordionContent className="text-kendini-black/80">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Перед первым использованием подрежьте фитиль до 5-7 мм</li>
                          <li>Размещайте свечу на термостойкой поверхности</li>
                          <li>При первом зажигании дайте свече гореть не менее 2-3 часов</li>
                          <li>Не оставляйте горящую свечу без присмотра</li>
                          <li>Гасите свечу, накрывая крышкой или используя специальный колпачок</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-kendini-brown/20">
                      <AccordionTrigger className="text-kendini-black hover:text-kendini-brown">
                        Меры предосторожности
                      </AccordionTrigger>
                      <AccordionContent className="text-kendini-black/80">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Не оставляйте горящую свечу без присмотра</li>
                          <li>Храните в недоступном для детей и домашних животных месте</li>
                          <li>Держите вдали от легковоспламеняющихся предметов</li>
                          <li>Размещайте свечу на ровной термостойкой поверхности</li>
                          <li>Не перемещайте горящую свечу</li>
                          <li>Не сжигайте свечу до самого дна</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-kendini-brown/20">
                      <AccordionTrigger className="text-kendini-black hover:text-kendini-brown">
                        Уход за свечой
                      </AccordionTrigger>
                      <AccordionContent className="text-kendini-black/80">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Перед каждым зажиганием подрезайте фитиль до 5-7 мм</li>
                          <li>Не допускайте попадания пыли и посторонних предметов в воск</li>
                          <li>Для равномерного горения позволяйте свече полностью расплавить верхний слой воска</li>
                          <li>После тушения дайте свече полностью остыть перед перемещением</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Instructions;
