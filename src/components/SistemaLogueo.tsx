import React, { useState } from 'react';
import { User, Lock, Mail, ArrowRight, LogIn, UserPlus, Phone, Gift } from 'lucide-react';

interface SistemaLogueoProps {
  onLoginSuccess: () => void;
}

function SistemaLogueo({ onLoginSuccess }: SistemaLogueoProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const toggleForm = () => {
    setIsRegister(!isRegister);
    // Clear form fields on toggle
    setEmail('');
    setPassword('');
    setUsername('');
    setPhone('');
    setConfirmPassword('');
    setReferralCode('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isRegister) {
      // Login logic
      const MOCK_ADMIN_EMAIL = 'admin@gmail.com';
      const MOCK_ADMIN_PASSWORD = 'memo040703';

      if (email === MOCK_ADMIN_EMAIL && password === MOCK_ADMIN_PASSWORD) {
        alert('¡Inicio de sesión exitoso como administrador!');
        onLoginSuccess(); // Call the success callback
      } else {
        alert('Credenciales incorrectas. Intenta de nuevo.');
      }
    } else {
      // Registration logic
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      alert(`Formulario de Registro enviado (simulado) para ${username} con email ${email}!`);
      // Here you would typically send registration data to a backend
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center transform -translate-y-16">
      {/* Logo — círculo perfecto + video completo */}
      <div
        className="w-60 h-60 rounded-full overflow-hidden mb-6 shadow-2xl
                   transition-transform duration-300 ease-in-out hover:scale-105 bg-black"
      >
        <video
          src="/logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain p-2 pl-4"
        />
      </div>

      <div
        className="relative bg-black/30 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl max-w-2xl w-full
                   neon-border transition-all duration-500 ease-in-out transform
                   hover:scale-[1.01]"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-2 animate-fadeIn sm:block">
            {isRegister ? 'Crear Cuenta' : 'Bienvenido'}
          </h1>
          <p className="text-textSecondary text-lg animate-fadeIn">
            {isRegister ? 'Únete a nuestra comunidad' : 'Inicia sesión para continuar'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isRegister && (
            <>
              <div className="animate-slideInLeft">
                <label htmlFor="email" className="block text-textSecondary text-sm font-medium mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@ejemplo.com"
                    className="w-full pl-10 pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus:border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="animate-slideInRight">
                <label htmlFor="password" className="block text-textSecondary text-sm font-medium mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus:border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </>
          )}

          {isRegister && (
            <>
              <div className="animate-slideInRight">
                <label htmlFor="username" className="block text-textSecondary text-sm font-medium mb-2">
                  Nombre de Usuario
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                  <input
                    type="text"
                    id="username"
                    placeholder="nombredeusuario"
                    className="w-full pl-10 pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus-border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="animate-slideInLeft">
                <label htmlFor="email" className="block text-textSecondary text-sm font-medium mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@ejemplo.com"
                    className="w-full pl-10 pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus-border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="animate-slideInRight">
                <label htmlFor="phone" className="block text-textSecondary text-sm font-medium mb-2">
                  Número de Celular
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary flex items-center gap-1">
                    🇵🇪 +51
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="987 654 321"
                    className="w-full pl-[7.5rem] pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus-border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    pattern="[0-9]{9}"
                    maxLength={9}
                  />
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                </div>
              </div>

              <div className="animate-slideInLeft">
                <label htmlFor="password" className="block text-textSecondary text-sm font-medium mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus-border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="animate-slideInRight">
                <label htmlFor="confirm-password" className="block text-textSecondary text-sm font-medium mb-2">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus-border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="animate-slideInLeft">
                <label htmlFor="referral-code" className="block text-textSecondary text-sm font-medium mb-2">
                  Código de Referido (Opcional)
                </label>
                <div className="relative">
                  <Gift className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
                  <input
                    type="text"
                    id="referral-code"
                    placeholder="ABCD123"
                    className="w-full pl-10 pr-4 py-2 bg-surface text-text rounded-lg border border-border
                               focus:ring-2 focus:ring-primary focus-border-transparent outline-none
                               transition-all duration-300 ease-in-out placeholder-textSecondary"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold
                       rounded-lg shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50
                       transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:scale-95"
          >
            {isRegister ? <UserPlus size={20} /> : <LogIn size={20} />}
            {isRegister ? 'Registrarse' : 'Iniciar Sesión'}
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-textSecondary">
            {isRegister ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
            <button
              onClick={toggleForm}
              className="ml-2 text-accent hover:text-primary font-medium transition-colors duration-300 ease-in-out
                         focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-md px-1 py-0.5"
            >
              {isRegister ? 'Inicia Sesión' : 'Regístrate'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SistemaLogueo;
