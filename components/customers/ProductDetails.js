import Link from "next/link"
import Rating from "./Rating"

export const ProductDetails = () => {
    return (
        <div className="flex items-start justify-between m-5 p-5 productDetail_box ">
            <div className=" flex flex-col items-start justify-start  productDetail w-full img">
                <h3 className="font-bold text-2xl">PRODUCT DETAILS</h3>
                <ul className="text-lg  flex flex-col items-start justify-start my-3 text-gray-700">
                    <li>Mint green tshirt for men with applique striped sleeves</li>
                    <li>Solid</li>
                    <li>Regular length</li>
                    <li>Round neck</li>
                    <li>Short, drop-shoulder sleeves</li>
                    <li>Knitted cotton fabric</li>


                    <li className="font-bold m-4"><b>Size & Fit</b></li>
                    <li>Loose Fit</li>
                    <li>The model (height 6') is wearing a size M</li>


                    <li className="font-bold m-4"><b>Material & Care</b></li>
                    <li>100 % Cotton</li>
                    <li>Machine wash</li>
                    <li>Dry in shade</li>
                    <li>Do not iron on the print</li>
                    <li>Wash with like colors</li>
                </ul>
                <div className=" flex flex-col items-start  justify-start">
                    <h3 className="font-bold mt-3">Specifications</h3>
                    <div className="columns-2 border-b-2 border-rose-500 m-2">
                        <div>
                            <span>care for me</span>
                        </div>
                        <div className="flex flex-col">
                            <span>Fabric</span>
                            <span>Cotton</span>
                        </div>
                        <div>
                            <span>care for me</span>
                        </div>
                        <div className=" flex flex-col">
                            <span>Fabric</span>
                            <span>Cotton</span>
                        </div>
                        <div>
                            <span>care for me</span>
                        </div>
                        <div>
                            <span>Fabric</span>
                            <span>Cotton</span>
                        </div>
                    </div>
                </div>
                <Link href='/'>
                    <a className=" text-red-400 text-lg font-bold mt-3">See More</a>
                </Link>
            </div>
            <Rating />
        </div >
    )
}
