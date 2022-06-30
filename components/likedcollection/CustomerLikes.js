
import Image from 'next/image'
import logo from '../../assets/logo.png'
import CustomersLikesProduct from '../Products/ProductDB'
const CustomerLikes = () => {
    return (
        <div>
            {
                CustomersLikesProduct &&
                CustomersLikesProduct.map((items) => (
                    <div className="card" key={items.id}>
                        <Image
                            src={items.src}
                        />
                        <h4>{items.title}</h4>
                        <p>{items.desc}</p>
                        <p>
                            <span>{items.curPrice}</span>
                            <s>{items.oriPrice}</s>{
                                items.discount}
                        </p>
                    </div>
                ))
            }

            <div className="card">
                <Image
                    src={logo}
                />
                <h4>HRX by Hritik Roshan</h4>
                <p>Men LifeStyle Track Pants</p>
                <p>
                    <span>RS. 947</span>
                    <s>RS 1499</s>(35% OFF)
                </p>
            </div>
        </div>
    )
}

export default CustomerLikes