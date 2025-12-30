import Image from "next/image";
import Link from "next/link"
export default function error() {

    return (
        <>
            <section className="error-section centred">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1 content-column">
                            <div className="error-content">
                                <figure className="image-box"><Image src="/assets/images/icons/error-img.png" alt="Image" width={970} height={591} priority /></figure>
                                <h2>Sorry this page isn&apos;t available</h2>
                                <p>We&apos;re not being able to find the page you&apos;re looking for</p>
                                <Link href="/" className="theme-btn-two">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
