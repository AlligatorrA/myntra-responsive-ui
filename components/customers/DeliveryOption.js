import Link from "next/link"

const DeliveryOption = () => {
    return (
        <div>
            <h3>DELIVERY OPTIONS</h3>

            <div className="">
                <label htmlFor="">
                    <input type="text" placeholder="Enter Pincode" />

                    <span>Check</span>
                </label>
                <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                <div className="">
                    <p>100% Original Products</p>
                    <p>Pay on delivery might be available</p>
                    <p>Easy 30 days returns and exchanges</p>
                    <p>Try & Buy might be available</p>
                </div>
                <div className="">
                    <h3>BEST OFFERS</h3>

                    <h3>EMI option available</h3>
                    <ul>
                        <li>EMI starting from Rs.27/month</li>
                    </ul>
                    <Link href='/'
                    >
                        <a >View Plan</a>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DeliveryOption