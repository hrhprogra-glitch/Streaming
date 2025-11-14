import { ArrowRight, CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import { subscriptions } from '../data/subscriptions';
import { ProductCard } from '../components/ProductCard';
import { ImageCarousel } from '../components/ImageCarousel';

interface HomeProps {
  setActivePage: (page: string) => void;
  // Nuevo prop para manejar la navegación de categorías desde el carrusel
  setCategoryFilter: (filter: string) => void; 
}

const benefits = [
  { icon: Zap, title: 'Entrega Instantánea', description: 'Recibe tu acceso al momento de la compra.' },
  { icon: CheckCircle, title: 'Precios Claros', description: 'Sin costos ocultos ni sorpresas.' },
  { icon: ShieldCheck, title: 'Soporte 24/7', description: 'Estamos aquí para ayudarte cuando lo necesites.' },
];

const featuredProducts = subscriptions.filter(p => p.featured);

export const HomePage = ({ setActivePage, setCategoryFilter }: HomeProps) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section - Ahora ocupa min-h-screen, elimina 'items-center' y añade padding superior (pt-24/pt-32) para crear distancia. */}
      <section className="relative min-h-screen flex justify-center text-center pt-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)'}}></div>
        
        <div className="container mx-auto px-4 relative">
          
          {/* CARRUSEL DE IMÁGENES INTEGRADO AQUÍ */}
          <div className="animate-fadeIn animation-delay-500 mb-12">
            {/* Pasamos las funciones de navegación al carrusel */}
            <ImageCarousel setActivePage={setActivePage} setCategoryFilter={setCategoryFilter} />
          </div>

          <button 
            onClick={() => setActivePage('products')}
            className="bg-primary text-background font-bold text-lg py-4 px-8 rounded-lg flex items-center justify-center mx-auto space-x-2 transform hover:scale-105 hover:shadow-glow-primary transition-all duration-300 animate-fadeInDown animation-delay-700"
          >
            <span>Ver Suscripciones</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-surface p-8 rounded-xl border border-border animate-fadeIn animation-delay-200">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">{benefit.title}</h3>
              <p className="text-textSecondary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Suscripciones Populares</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
