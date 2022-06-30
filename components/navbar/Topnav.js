import logo from '../../assets/logo.png'
import Image from 'next/image'

const Topnav = () => {
    return (
        <>
            <div className="">
                <Image
                    src={logo}
                    width={60}
                    height={40}
                />
            </div>
            <div className="">
                <ul>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>HOME & LIVING</li>
                    <li>BEAUTY</li>
                    <li>STUDIO</li>
                </ul>

                <label htmlFor="">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="search for products, brands and more" />
                </label>
            </div>
            <div className="">
                <i className="fa-regular fa-user fa-2x"></i>
                <i className="fa-regular fa-heart fa-2x"></i>
                <i className="fa-solid fa-bag-shopping fa-2x"></i>
            </div>
        </>
    )
}

export default Topnav