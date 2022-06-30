import Link from "next/link"

const Product = () => {
    return (
        <div>
            <div className="">
                <h2>Difference of Opinion</h2>
                <p>Men Mint Green Round Neck Drop-Shoulder Sleeves Cotton Loose T-shirt</p>
                <Link href='/'><a ><b>4.2</b>|284 Ratings</a></Link>
                <hr />
            </div>
            <div className="">
                <div className="">
                    <h2>Rs. 571</h2>
                    <p>RS 1299</p>
                    <p>(56% OFF)</p>
                </div>
                <p>inclusive of all taxes</p>
            </div>

            <div className="">
                <h3>SELECT SIZE</h3>
                <Link href='/'><a >SIZE CHART </a></Link>

                <div className="">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                </div>
                <div className="">
                    <button>ADD TO BAG</button>
                    <button>WISHLIST</button>
                </div>
            </div>
        </div>
    )
}

export default Product