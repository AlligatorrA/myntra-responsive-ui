import Image from "next/image"
import Link from "next/link"

const Rating = () => {
    return (
        <div>
            <div className="">
                <h3>RATINGS</h3>
                <div className="">
                    <p>4.2</p>
                    <span>284 Verified Buyers</span>
                </div>
                <div className=""></div>

                <div className="">
                    <h3>WHAT CUSTOMERS SAID</h3>

                </div>
                <Link href='/'>
                    <a >View Details</a>
                </Link>
                <hr />

            </div>
            <div className="">
                <h4>Customer Photos</h4>
                <picture>
                    <Image
                        src='/'
                        width={40}
                        height={60}
                    />
                </picture>
            </div>
            <div className="">
                <h4>Customer Reviews</h4>
                <div className="">
                    <div className="">
                        <span>5Star</span>
                        <p>In size of M the t shirt is too loose Generally i wear L size but this t shirt is bigger than L size</p>
                    </div>
                    <div className="">
                        <p>Nikunj Chaudhary | 24 June 2022</p>
                        <span> Like Dslike</span>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <span>5Star</span>
                        <p>In size of M the t shirt is too loose Generally i wear L size but this t shirt is bigger than L size</p>
                    </div>
                    <div className="">
                        <p>Nikunj Chaudhary | 24 June 2022</p>
                        <span> Like Dslike</span>
                    </div>
                </div>

                <Link href='/'>
                    <a>View all 8 reviews</a>
                </Link>
                <div className="">
                    <p>Product Code: <b>16407468</b></p>
                    <p>Seller:  <Link href='/'>
                        <a>ELCINCO INC</a>
                    </Link></p>
                    <p><Link href='/'>
                        <a>View Supplier Information</a>
                    </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Rating