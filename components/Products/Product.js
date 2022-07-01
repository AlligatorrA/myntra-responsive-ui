import Image from "next/image"
import Link from "next/link"
import product1 from "../../assets/ProductOne.jpg";
import product2 from "../../assets/ProductTwo.jpg";
import product3 from "../../assets/Product3.webp";
import product4 from "../../assets/Product4.jpg";
import DeliveryOption from "../customers/DeliveryOption";

const Product = () => {
    return (
        <div className="flex top-ui">
            <div className=" m-0.5 p-2 img rounded-lg">
                <section class="auto-slider">
                    <div id="slider">
                        <figure>
                            <Image
                                src={product1}
                                alt="Camera"
                            /><Image
                                src={product2}
                                alt="Camera"
                            /><Image
                                src={product3}
                                alt="Camera"
                            />
                            <Image
                                src={product4}
                                alt="Camera"
                            />
                        </figure>
                        <div class="indicator"></div>
                    </div>
                </section>

            </div>
            <div className="m-0.5 p-2">
                <div className="m-0.5 p-2 text-lg">
                    <h1 className="text-4xl font-bold italic m-1	">Difference of Opinion</h1>
                    <p className="m-4">Men Mint Green Round Neck Drop-Shoulder Sleeves Cotton Loose T-shirt</p>
                    <Link href='/'><a className="p-2 border-solid border-2 border-slate-600 my-2"><b>4.2 <i className="fa-solid fa-star text-green-500"></i></b> | 284 Ratings</a></Link>
                </div>
                <hr />
                <div className="">
                    <div className="flex items-center m-2 p-2 text-lg font-bold">
                        <h2>Rs.571</h2>
                        <p className="m-2 p-2"><s>RS 1299</s></p>
                        <p className="m-2 p-2 text-red-400">(56% OFF)</p>
                    </div>
                    <p className="text-green-500 font-bold">inclusive of all taxes</p>
                </div>

                <div >
                    <div className=" flex justify-around my-3 text-lg font-bold ">
                        <h3>SELECT SIZE</h3>
                        <Link href='/'><a className=" text-red-400">SIZE CHART </a></Link>
                    </div>
                    <div className=" p-1 m-1 flex">
                        <button className=" w-30 h-10 rounded-full p-4 flex items-center hover:bg-red-500 border border-rose-500 mx-2 ">S</button>
                        <button className=" w-30 h-10 rounded-full p-4 flex items-center hover:bg-red-500 border border-rose-500  mx-2">M</button>
                        <button className=" w-30 h-10 rounded-full p-4 flex items-center hover:bg-red-500 border border-rose-500  mx-2">L</button>
                        <button className=" w-30 h-10 rounded-full p-4 flex items-center hover:bg-red-500 border border-rose-500 mx-2 ">XL</button>
                        <button className=" w-30 h-10 rounded-full p-4 flex items-center hover:bg-red-500 border border-rose-500 mx-2">XXL</button>
                    </div>
                    <div className=" flex justify-around">
                        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-4 px-7 rounded"><i className="fa-solid fa-bag-shopping mx-3"></i>ADD TO BAG</button>
                        <button className="bg-transparent hover:bg-rose-500 font-semibold hover:text-white py-2 px-4 border border-rose-500 hover:border-transparent rounded"><i className="fa-regular fa-heart mx-3"></i>WISHLIST</button>
                    </div>
                </div>
                <DeliveryOption />
            </div>
        </div>
    )
}

export default Product