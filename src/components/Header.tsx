import { useState } from 'react';
import { Clapperboard, Menu, X, ShoppingCart, Phone, Mail, Camera } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const navItems = [
  { name: 'Inicio', page: 'home' },
  { name: 'Categorías', page: 'categories' },
  { name: 'Productos', page: 'products' },
];

export const Header = ({ activePage, setActivePage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount] = useState(3); // Mocked cart item count
  const [showProfileDetails, setShowProfileDetails] = useState(false); // Nuevo estado para los detalles del perfil

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setIsMenuOpen(false);
    setShowProfileDetails(false); // Cerrar detalles del perfil al navegar
  };

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  return (
    <> {/* Usamos un fragmento para devolver múltiples elementos */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Izquierda: Logo y Título */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <Clapperboard className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-text">MeluStreaming</span>
            </div>

            {/* Centro: Ítems de Navegación */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-lg font-medium transition-colors duration-300 relative ${
                    activePage === item.page ? 'text-primary' : 'text-textSecondary hover:text-primary'
                  }`}
                >
                  {item.name}
                  {activePage === item.page && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Derecha: Perfil de Usuario y Carrito de Compras */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Perfil de Usuario - Ahora Clickeable */}
              <button
                onClick={toggleProfileDetails}
                className="flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Foto de Pexels
                  alt="User Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="text-textSecondary text-sm">Bienvenido, <span className="text-text font-semibold">Admin</span></p>
                  <p className="text-textSecondary text-xs font-bold">
                    <span className="inline-block bg-accent/20 text-accent border border-accent rounded-full px-2 py-0.5">
                      Administrador
                    </span>
                  </p>
                </div>
              </button>

              {/* Icono de Carrito de Compras */}
              <button className="relative text-text hover:text-primary transition-transform duration-300 hover:scale-110">
                <ShoppingCart className="w-7 h-7" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Menú Móvil y Carrito de Compras (para pantallas pequeñas) */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Icono de Carrito de Compras para Móvil */}
              <button className="relative text-text hover:text-primary transition-transform duration-300 hover:scale-110">
                <ShoppingCart className="w-7 h-7" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
              {/* Botón de Menú Móvil */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text">
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-surface">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activePage === item.page ? 'text-primary' : 'text-textSecondary hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Sección de Detalles del Perfil - Renderizado Condicionalmente */}
      {showProfileDetails && (
        <div className="absolute top-20 left-0 right-0 z-40 bg-surface border-b border-border shadow-lg py-8 px-6 md:px-12 animate-fadeInDown">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* Imagen de Perfil y Opción de Cambio */}
            <div className="relative group animate-fadeIn animation-delay-200">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-primary shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-9 h-9" />
                <span className="sr-only">Cambiar Foto</span>
              </button>
            </div>

            {/* Información del Perfil */}
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <h3 className="text-4xl font-bold text-text animate-fadeIn animation-delay-300">Admin</h3>
              <p className="text-textSecondary text-lg flex items-center justify-center md:justify-start space-x-2 animate-fadeIn animation-delay-400">
                <Phone className="w-6 h-6 text-primary" />
                <span>+34 123 456 789</span>
              </p>
              <p className="text-textSecondary text-lg flex items-center justify-center md:justify-start space-x-2 animate-fadeIn animation-delay-500">
                <Mail className="w-6 h-6 text-primary" />
                <span>admin@melustreaming.com</span>
              </p>
              <span className="inline-block bg-accent/20 text-accent border border-accent rounded-full px-4 py-1.5 text-base font-bold self-center md:self-start animate-fadeIn animation-delay-600">
                Administrador
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
