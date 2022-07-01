
import Image from 'next/image'
import logo from '../../assets/logo.png'
import CustomersLikesProduct from '../Products/ProductDB'
const CustomerLikes = () => {
    return (
        <div className='flex flex-wrap gap-5 justify-start items-start flex-col'>
            <h2 className='font-bold m-3'>SIMILAR PRODUCTS</h2>
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {
                    CustomersLikesProduct &&
                    CustomersLikesProduct.map((items) => (
                        <div className="card" key={items.id}>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <Image className="w-full m-3" src={logo} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">T{items.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {items.desc}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.curPrice}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><s>{items.oriPrice}</s></span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.discount}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default CustomerLikes