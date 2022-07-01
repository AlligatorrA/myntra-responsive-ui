import Link from 'next/link'
const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <div className="flex flex-wrap gap-5  flex-col border-t-2 border-gray-900 mt-2 ">
                <h5 className='font-bold m-7'>ONLINE SHOPPING</h5>
                <div className='flex  justify-around'>
                    <div className="flex  justify-start m-4">
                        <ul className="flex  justify-start flex-col items-start min-width">
                            <li> <Link href='/' >
                                <a>Men</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Women</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Kids</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Home & Living</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Beauty</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Gift Card</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Myntra Insider</a>
                            </Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <h5 className='font-bold'>USEFUL LINKS</h5>
                        <ul className="flex  justify-start flex-col items-start grid-cols-2">
                            <li><Link href='/' >
                                <a>Contact Us</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>FAQ</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>T&C</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Terms Of Use</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Track Order</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Shipping</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Cancellation</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Return</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Whitehat</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>BLog</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Carrers</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Privacy Policy</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Site Map</a>
                            </Link></li>
                            <li><Link href='/' >
                                <a>Corporate Information</a>
                            </Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-bold'>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                        <div className="flex  justify-start flex-col items-start">
                            <h5>100% ORIGINAL</h5>
                            <h5>100% ORIGINAL</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomRow">
                <h3 className='font-bold m-7'>PRODUCT SEARCHES</h3>
                <Link href='/' >
                    <a>Kurta pajama</a>
                </Link>|
                <Link href='/' >
                    <a>Leather Jacket</a>
                </Link>|
                <Link href='/' >
                    <a>Sherwani</a>
                </Link>|
                <Link href='/' >
                    <a>Shirts</a>
                </Link>|
                <Link href='/' >
                    <a>T-Shirts</a>
                </Link>|
                <Link href='/' >
                    <a>Waistcoat</a>
                </Link>|
                <Link href='/' >
                    <a>Photo Frame</a>
                </Link>/
                <Link href='/' >
                    <a>Denim Shirt</a>
                </Link>|
            </div>
            <div className=" flex justify-around m-4">
                <p>In case of any concern, <Link href='/' >
                    <a className=" text-red-400 text-lg font-bold mt-3">Contact Us</a>
                </Link></p>
                <p>© 2022 www.myntra.com. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer