import Link from "next/link";
import Image from "next/image";
import HeaderTop from "./HeaderTop";
import OnepageMenu from "../OnepageMenu";
import OnepageMobileMenu from "../OnepageMobileMenu";

// ✅ Define props type
type Header2Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
};

export default function Header2({ scroll, handleMobileMenu, handlePopup }: Header2Props) {
  return (
    <>
      <style jsx>{`
        .professional-header {
          background: linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        
        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        
        .logo-area {
          display: flex;
          align-items: center;
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 50px;
        }
        
        .professional-menu {
          display: flex;
          align-items: center;
          gap: 35px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .professional-menu li a {
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .professional-menu li a:hover {
          color: #FF4081;
        }
        
        .professional-menu li a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF4081;
          transition: width 0.3s ease;
        }
        
        .professional-menu li a:hover::after {
          width: 100%;
        }
        
        .cta-button {
          background: #ffffff;
          color: #6B2C5C;
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(255,255,255,0.2);
        }
        
        .cta-button:hover {
          background: #FF4081;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255,64,129,0.4);
        }
        
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 10px;
        }
        
        .mobile-toggle span {
          width: 25px;
          height: 3px;
          background: #ffffff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 991px) {
          .header-container {
            padding: 0 20px;
            height: 70px;
          }
          
          .nav-right {
            display: none;
          }
          
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
      
      <header className="professional-header">
        <div className="header-container">
          <div className="logo-area">
            <Link href="/">
              <Image src="/assets/images/logo-ds.png" alt="DS Crédito" width={100} height={33} priority />
            </Link>
          </div>
          
          <div className="mobile-toggle" onClick={handleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className="nav-right">
            <nav>
              <ul className="professional-menu">
                <li><a href="https://dsicredito.pt/quem-somos/" target="_blank" rel="noopener noreferrer">Quem Somos</a></li>
                <li><a href="https://dsicredito.pt/servicos/" target="_blank" rel="noopener noreferrer">Serviços</a></li>
                <li><a href="https://dsicredito.pt/oportunidades-de-carreira/" target="_blank" rel="noopener noreferrer">Oportunidades de Carreira</a></li>
                <li><a href="https://dsicredito.pt/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li><a href="https://dsicredito.pt/contactos/" target="_blank" rel="noopener noreferrer">Contactos</a></li>
              </ul>
            </nav>
            <a href="#simulador" className="cta-button">Simular Crédito</a>
          </div>
        </div>
      </header>
      
      <OnepageMobileMenu
        isSidebar={false}
        handleMobileMenu={handleMobileMenu}
      />
    </>
  );
}
