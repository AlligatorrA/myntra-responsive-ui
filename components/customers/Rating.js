import Image from "next/image"
import Link from "next/link"
import pOne from "../../assets/productOne.jpg";

const Rating = () => {
    return (
        <div className="flex justify-start items-start flex-col m-4">
            <div className="flex justify-start items-start flex-col">
                <h3 className="font-bold text-2xl">RATINGS</h3>
                <div className="my-3">
                    <p className="text-4xl m-2">4.2 <i className="fa-solid fa-star text-green-500"></i></p>
                    <span>284 Verified Buyers</span>
                </div>
                <div className="font-bold text-lg"></div>

                <div className="">
                    <h3 className="font-bold text-lg">WHAT CUSTOMERS SAID</h3>
                    <p className=" flex justify-between items-center">fit</p> <span>As Expected(54%)</span>
                    <p className=" flex justify-between items-center">length</p> <span>As Expected(64%)</span>
                </div>
                <Link href='/'>
                    <a className=" text-red-400 text-lg font-bold mt-3">View Details</a>
                </Link>
                <hr />

            </div>
            <div className="">
                <h4 className="font-bold text-lg m-4">Customer Photos</h4>
                <picture>
                    <Image
                        src={pOne}
                        width={40}
                        height={60}
                        className='mx-2'
                    />
                    <Image
                        src={pOne}
                        width={40}
                        height={60} className='mx-2'
                    />
                </picture>
            </div>
            <div className="flex justify-start items-start flex-col mx-4">
                <h4 className="font-bold text-2xl m-3">Customer Reviews</h4>
                <div className="">
                    <div className="flex items-start justify-start">
                        <span className="bg-green-500 rounded px-2 flex items-center">5<i className="fa-solid fa-star text-green-900"></i></span>
                        <p className="flex items-start justify-start">In size of M the t shirt is too loose Generally i wear L size but this t shirt is bigger than L size</p>
                    </div>
                    <div className="flex justify-between border-b-2 m-2 p-3">
                        <p>Nikunj Chaudhary | 24 June 2022</p>
                        <div className="flex items-center">
                            <span><i class="fa-solid fa-thumbs-up mx-5"></i></span>
                            <span><i class="fa-solid fa-thumbs-down mx-5"></i></span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-start justify-start">
                        <span className="bg-green-500 rounded px-2 flex items-center">5<i className="fa-solid fa-star text-green-900"></i></span>
                        <p className="flex items-start justify-start">In size of M the t shirt is too loose Generally i wear L size but this t shirt is bigger than L size</p>
                    </div>
                    <div className="flex justify-between border-b-2 m-2 p-3">
                        <p>Nikunj Chaudhary | 24 June 2022</p>
                        <div className="flex items-center">
                            <span><i class="fa-solid fa-thumbs-up mx-5"></i></span>
                            <span><i class="fa-solid fa-thumbs-down mx-5"></i></span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-start justify-start">
                        <span className="bg-green-500 rounded px-2 flex items-center">5<i className="fa-solid fa-star text-green-900"></i></span>
                        <p className="flex items-start justify-start">In size of M the t shirt is too loose Generally i wear L size but this t shirt is bigger than L size</p>
                    </div>
                    <div className="flex justify-between border-b-2 m-2 p-3">
                        <p>Nikunj Chaudhary | 24 June 2022</p>
                        <div className="flex items-center">
                            <span><i class="fa-solid fa-thumbs-up mx-5"></i></span>
                            <span><i class="fa-solid fa-thumbs-down mx-5"></i></span>
                        </div>
                    </div>
                </div>


                <Link href='/'>
                    <a className=" text-red-400 text-lg font-bold m-3">View all 8 reviews</a>
                </Link>
                <div className="">
                    <p>Product Code: <b>16407468</b></p>
                    <p>Seller:  <Link href='/'>
                        <a className=" text-red-400 text-lg font-bold m-3">ELCINCO INC</a>
                    </Link></p>
                    <p><Link href='/'>
                        <a className=" text-gray-400  mt-3">View Supplier Information</a>
                    </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Rating