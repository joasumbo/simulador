'use client'

import { useEffect, useState } from 'react'

export default function PageSkeleton() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleLoad = () => {
            // Aguarda um pouco para garantir que tudo carregou
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
            return () => window.removeEventListener('load', handleLoad)
        }
    }, [])

    if (!isLoading) return null

    return (
        <>
            <style jsx>{`
                .skeleton-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #fafafa;
                    z-index: 99999;
                    overflow: hidden;
                    animation: fadeOut 0.5s ease 0s forwards;
                }
                @keyframes fadeOut {
                    0% { opacity: 1; }
                    100% { opacity: 0; pointer-events: none; }
                }
                .skeleton-header {
                    height: 90px;
                    background: linear-gradient(135deg, #C2185B 0%, #880E4F 100%);
                    display: flex;
                    align-items: center;
                    padding: 0 50px;
                    position: relative;
                    overflow: hidden;
                }
                .skeleton-logo {
                    width: 90px;
                    height: 30px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 6px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-menu {
                    margin-left: auto;
                    display: flex;
                    gap: 30px;
                }
                .skeleton-menu-item {
                    width: 80px;
                    height: 16px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 4px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-banner {
                    height: 500px;
                    background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite;
                    position: relative;
                }
                .skeleton-banner-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    text-align: center;
                }
                .skeleton-title {
                    width: 80%;
                    height: 48px;
                    background: rgba(0,0,0,0.08);
                    border-radius: 8px;
                    margin: 0 auto 20px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-subtitle {
                    width: 60%;
                    height: 20px;
                    background: rgba(0,0,0,0.06);
                    border-radius: 6px;
                    margin: 0 auto;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-section {
                    padding: 60px 50px;
                    background: #ffffff;
                }
                .skeleton-section:nth-child(even) {
                    background: #fafafa;
                }
                .skeleton-section-header {
                    text-align: center;
                    margin-bottom: 40px;
                }
                .skeleton-section-tag {
                    width: 120px;
                    height: 20px;
                    background: rgba(194, 24, 91, 0.2);
                    border-radius: 20px;
                    margin: 0 auto 16px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-section-title {
                    width: 400px;
                    height: 40px;
                    background: rgba(0,0,0,0.08);
                    border-radius: 8px;
                    margin: 0 auto;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .skeleton-card {
                    background: #ffffff;
                    border: 1px solid #e9ecef;
                    border-radius: 12px;
                    padding: 30px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-card-image {
                    width: 100%;
                    height: 200px;
                    background: rgba(0,0,0,0.05);
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .skeleton-card-title {
                    width: 70%;
                    height: 24px;
                    background: rgba(0,0,0,0.08);
                    border-radius: 6px;
                    margin-bottom: 12px;
                }
                .skeleton-card-text {
                    width: 100%;
                    height: 16px;
                    background: rgba(0,0,0,0.06);
                    border-radius: 4px;
                    margin-bottom: 8px;
                }
                .skeleton-footer {
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                    padding: 60px 50px 30px;
                    margin-top: auto;
                }
                .skeleton-footer-content {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                    max-width: 1200px;
                    margin: 0 auto 40px;
                }
                .skeleton-footer-col {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .skeleton-footer-title {
                    width: 120px;
                    height: 20px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 4px;
                    margin-bottom: 8px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-footer-line {
                    width: 80%;
                    height: 14px;
                    background: rgba(255,255,255,0.15);
                    border-radius: 4px;
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .skeleton-spinner {
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                    width: 50px;
                    height: 50px;
                    border: 4px solid rgba(194, 24, 91, 0.2);
                    border-top-color: #C2185B;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 991px) {
                    .skeleton-header {
                        padding: 0 20px;
                    }
                    .skeleton-menu {
                        display: none;
                    }
                    .skeleton-banner {
                        height: 400px;
                    }
                    .skeleton-banner-content {
                        width: 90%;
                    }
                    .skeleton-section {
                        padding: 40px 20px;
                    }
                    .skeleton-cards {
                        grid-template-columns: 1fr;
                    }
                    .skeleton-footer-content {
                        grid-template-columns: 1fr 1fr;
                        gap: 30px;
                    }
                }
            `}</style>

            <div className="skeleton-overlay">
                {/* Header Skeleton */}
                <div className="skeleton-header">
                    <div className="skeleton-logo"></div>
                    <div className="skeleton-menu">
                        <div className="skeleton-menu-item"></div>
                        <div className="skeleton-menu-item"></div>
                        <div className="skeleton-menu-item"></div>
                        <div className="skeleton-menu-item"></div>
                        <div className="skeleton-menu-item"></div>
                    </div>
                </div>

                {/* Banner Skeleton */}
                <div className="skeleton-banner">
                    <div className="skeleton-banner-content">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-subtitle"></div>
                    </div>
                </div>

                {/* Section 1 - About */}
                <div className="skeleton-section">
                    <div className="skeleton-section-header">
                        <div className="skeleton-section-tag"></div>
                        <div className="skeleton-section-title"></div>
                    </div>
                    <div className="skeleton-cards">
                        <div className="skeleton-card">
                            <div className="skeleton-card-title"></div>
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text" style={{ width: '60%' }}></div>
                        </div>
                        <div className="skeleton-card">
                            <div className="skeleton-card-title"></div>
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Testimonials */}
                <div className="skeleton-section">
                    <div className="skeleton-section-header">
                        <div className="skeleton-section-tag"></div>
                        <div className="skeleton-section-title"></div>
                    </div>
                    <div className="skeleton-cards">
                        <div className="skeleton-card">
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text" style={{ width: '80%' }}></div>
                        </div>
                        <div className="skeleton-card">
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text" style={{ width: '80%' }}></div>
                        </div>
                        <div className="skeleton-card">
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text"></div>
                            <div className="skeleton-card-text" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Section 3 - Team */}
                <div className="skeleton-section">
                    <div className="skeleton-section-header">
                        <div className="skeleton-section-tag"></div>
                        <div className="skeleton-section-title"></div>
                    </div>
                    <div className="skeleton-cards">
                        {[1,2,3,4,5,6].map((i) => (
                            <div key={i} className="skeleton-card">
                                <div className="skeleton-card-image"></div>
                                <div className="skeleton-card-title"></div>
                                <div className="skeleton-card-text" style={{ width: '50%' }}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Skeleton */}
                <div className="skeleton-footer">
                    <div className="skeleton-footer-content">
                        <div className="skeleton-footer-col">
                            <div className="skeleton-footer-title"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                        </div>
                        <div className="skeleton-footer-col">
                            <div className="skeleton-footer-title"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                        </div>
                        <div className="skeleton-footer-col">
                            <div className="skeleton-footer-title"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                        </div>
                        <div className="skeleton-footer-col">
                            <div className="skeleton-footer-title"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                            <div className="skeleton-footer-line"></div>
                        </div>
                    </div>
                </div>

                {/* Loading Spinner */}
                <div className="skeleton-spinner"></div>
            </div>
        </>
    )
}
