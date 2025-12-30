"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <>
      <style jsx>{`
        .ds-preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          animation: fadeOut 0.5s ease 1.2s forwards;
        }
        
        .preloader-content {
          text-align: center;
          animation: pulse 1.5s ease infinite;
        }
        
        .preloader-logo {
          margin-bottom: 30px;
          animation: slideDown 0.8s ease;
        }
        
        .preloader-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: #FF4081;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }
        
        .preloader-text {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          margin-top: 20px;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeInText 1s ease 0.5s backwards;
        }
        
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInText {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      
      <div className="ds-preloader">
        <div className="preloader-content">
          <div className="preloader-logo">
            <Image 
              src="/assets/images/logo-ds.png" 
              alt="DS Crédito" 
              width={150} 
              height={50}
              priority
            />
          </div>
          <div className="preloader-spinner"></div>
          <div className="preloader-text">A carregar...</div>
        </div>
      </div>
    </>
  );
}
