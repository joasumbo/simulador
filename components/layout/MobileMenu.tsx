import Link from "next/link";
import Image from "next/image";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ handleMobileMenu }: MobileMenuProps) {
  return (
    <>
      <style jsx>{`
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.7);
          z-index: 9998;
          animation: fadeIn 0.3s ease;
        }
        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%);
          z-index: 9999;
          padding: 30px;
          overflow-y: auto;
          animation: slideInRight 0.3s ease;
        }
        .mobile-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .mobile-close:hover {
          background: rgba(255,255,255,0.2);
          transform: rotate(90deg);
        }
        .mobile-close::before,
        .mobile-close::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 2px;
          background: #ffffff;
        }
        .mobile-close::before {
          transform: rotate(45deg);
        }
        .mobile-close::after {
          transform: rotate(-45deg);
        }
        .mobile-logo {
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .mobile-nav li {
          margin-bottom: 20px;
        }
        .mobile-nav li a {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          display: block;
          padding: 12px 20px;
          border-radius: 8px;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }
        .mobile-nav li a:hover {
          background: rgba(255,255,255,0.1);
          transform: translateX(5px);
          color: #FF4081;
        }
        .mobile-cta {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-cta a {
          display: block;
          background: #ffffff;
          color: #6B2C5C;
          padding: 15px 25px;
          border-radius: 30px;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .mobile-cta a:hover {
          background: #FF4081;
          color: #ffffff;
          transform: scale(1.05);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="mobile-menu-overlay" onClick={handleMobileMenu} />
      
      <div className="mobile-menu-panel">
        <div className="mobile-close" onClick={handleMobileMenu}></div>
        
        <div className="mobile-logo">
          <Link href="/">
            <Image src="/assets/images/logo-ds.png" alt="DS Crédito" width={90} height={30} priority />
          </Link>
        </div>

        <ul className="mobile-nav">
          <li><a href="#inicio" onClick={handleMobileMenu}>Início</a></li>
          <li><a href="#quem-somos" onClick={handleMobileMenu}>Quem Somos</a></li>
          <li><a href="#testemunhos" onClick={handleMobileMenu}>Testemunhos</a></li>
          <li><a href="#valores" onClick={handleMobileMenu}>Valores</a></li>
          <li><a href="#equipa" onClick={handleMobileMenu}>Equipa</a></li>
          <li><a href="#contactos" onClick={handleMobileMenu}>Contactos</a></li>
        </ul>

        <div className="mobile-cta">
          <a href="#simulador" onClick={handleMobileMenu}>Simular Crédito</a>
        </div>
      </div>
    </>
  );
}
