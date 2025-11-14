import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import SistemaLogueo from './components/SistemaLogueo'; // Import the login component
import { HomePage } from './pages/Home';
import { CategoriesPage } from './pages/Categories';
import { ProductsPage } from './pages/Products';
import './index.css'; // Importa el CSS global

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const [activePage, setActivePage] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        // Pasamos setCategoryFilter a HomePage para que el carrusel pueda navegar
        return <HomePage setActivePage={setActivePage} setCategoryFilter={setCategoryFilter} />;
      case 'categories':
        return <CategoriesPage setActivePage={setActivePage} setCategoryFilter={setCategoryFilter} />;
      case 'products':
        return <ProductsPage categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />;
      default:
        return <HomePage setActivePage={setActivePage} setCategoryFilter={setCategoryFilter} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden">
      {!isLoggedIn ? (
        <div
          className="flex-grow flex items-center justify-center p-4
                     bg-streaming-background bg-cover bg-center bg-no-repeat bg-fixed"
        >
          <SistemaLogueo onLoginSuccess={() => setIsLoggedIn(true)} />
        </div>
      ) : (
        <>
          <Header activePage={activePage} setActivePage={setActivePage} />
          <main className="flex-grow bg-background"> {/* Ensure main content has a background */}
            {renderPage()}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
