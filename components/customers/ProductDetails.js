import Link from "next/link"

export const ProductDetails = () => {
    return (
        <div>
            <h3>PRODUCT DETAILS</h3>
            <ul>
                <li>Mint green tshirt for men with applique striped sleeves</li>
                <li>Solid</li>
                <li>Regular length</li>
                <li>Round neck</li>
                <li>Short, drop-shoulder sleeves</li>
                <li>Knitted cotton fabric</li>


                <li><b>Size & Fit</b></li>
                <li>Loose Fit</li>
                <li>The model (height 6') is wearing a size M</li>


                <li><b>Material & Care</b></li>
                <li>100 % Cotton</li>
                <li>Machine wash</li>
                <li>Dry in shade</li>
                <li>Do not iron on the print</li>
                <li>Wash with like colors</li>
            </ul>
            <div className="">
                <h3>Specifications</h3>
                <div className="">
                    <div className="">
                        <span>care for me</span>
                    </div>
                    <div className="">
                        <span>Fabric</span>
                        <span>Cotton</span>
                    </div>
                    <div className="">
                        <span>care for me</span>
                    </div>
                    <div className="">
                        <span>Fabric</span>
                        <span>Cotton</span>
                    </div>
                    <div className="">
                        <span>care for me</span>
                    </div>
                    <div className="">
                        <span>Fabric</span>
                        <span>Cotton</span>
                    </div>
                </div>
            </div>
            <Link href='/'>
                <a>See More</a>
            </Link>
        </div>
    )
}
