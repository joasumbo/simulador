
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <>
        <section className="service-style-two">
            <div className="bg-layer"></div>
            <div className="auto-container">
                <div className="inner-container" style={{ backgroundImage: "url(/assets/images/background/service-bg.jpg)" }}>
                    <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/pattern-15.png)" }}></div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="icon-box"><Image src="/assets/images/icons/icon-20.png" alt="Image" width={80} height={80} priority /></figure>
                                    <h3><Link href="/temprory-staffing">Temprory <br />Recruitment</Link></h3>
                                    <p>Indignation and dislike men who are so beguiled demoralized.</p>
                                    <ul className="list clearfix">
                                        <li><Link href="/index-2">Law Firms</Link></li>
                                        <li><Link href="/index-2">Customer Service</Link></li>
                                        <li><Link href="/index-2">Skilled Trades</Link></li>
                                        <li><Link href="/index-2">Shipping Companies</Link></li>
                                        <li><Link href="/index-2">Offices</Link></li>
                                    </ul>
                                    <div className="link"><Link href="/temprory-staffing"><i className="flaticon-right-arrow"></i>More Details</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="icon-box"><Image src="/assets/images/icons/icon-21.png" alt="Image" width={80} height={80} priority /></figure>
                                    <h3><Link href="/direct-hire">Direct <br />Recruitment</Link></h3>
                                    <p>Desire that they cannot foresee the pain and trouble.</p>
                                    <ul className="list clearfix">
                                        <li><Link href="/index-2">Law Firms</Link></li>
                                        <li><Link href="/index-2">Customer Service</Link></li>
                                        <li><Link href="/index-2">Skilled Trades</Link></li>
                                        <li><Link href="/index-2">Shipping Companies</Link></li>
                                        <li><Link href="/index-2">Offices</Link></li>
                                    </ul>
                                    <div className="link"><Link href="/direct-hire"><i className="flaticon-right-arrow"></i>More Details</Link></div>
                                    <span className="text">To work with us? <Link href="/index-2">Let&apos;s get started</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="icon-box"><Image src="/assets/images/icons/icon-22.png" alt="Image" width={80} height={80} priority /></figure>
                                    <h3><Link href="/contract-hire">Contract <br />Recruitment</Link></h3>
                                    <p>Equal blame belongs to those who fail in their duty through.</p>
                                    <ul className="list clearfix">
                                        <li><Link href="/index-2">Law Firms</Link></li>
                                        <li><Link href="/index-2">Customer Service</Link></li>
                                        <li><Link href="/index-2">Skilled Trades</Link></li>
                                        <li><Link href="/index-2">Shipping Companies</Link></li>
                                        <li><Link href="/index-2">Offices</Link></li>
                                    </ul>
                                    <div className="link"><Link href="/contract-hire"><i className="flaticon-right-arrow"></i>More Details</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
