import Link from "next/link"

const DeliveryOption = () => {
    return (
        <div className="flex justify-start items-start delivery">
            <div className="m-4 p-4 flex items-start flex-col" >
                <h2 className="font-bold text-2xl my-4">DELIVERY OPTIONS</h2>

                <div className="flex items-start flex-col">
                    <form>

                        <div className="relative border ">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

                            </div>
                            <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:border-rose-500 " placeholder="Enter Pin Code" />
                            <button type="submit" className="text-rose-600 font-bold absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300rounded-lg text-sm px-4 py-2 ">Check</button>
                        </div>
                    </form>
                    <p className="text-sm mb-5">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    <div className="m-1 p-1 flex items-start flex-col text-lg">
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 30 days returns and exchanges</p>
                        <p>Try & Buy might be available</p>
                    </div>
                    <div className="mt-1 flex items-start flex-col ">
                        <h3 className="font-bold text-2xl my-4 ">BEST OFFERS</h3>

                        <h3 className="text-lg  font-bold">EMI option available</h3>
                        <ul>
                            <li>EMI starting from Rs.27/month</li>
                        </ul>
                        <Link href='/'
                        >
                            <a className="text-red-400 text-lg font-bold my-3">View Plan</a>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryOption