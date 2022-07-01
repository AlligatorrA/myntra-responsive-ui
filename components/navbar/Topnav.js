import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const Topnav = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <nav className="flex justify-around items-start p-2 shadow-2xl ">
                <div className={`flex  justify-around items-center ${menu ? 'show' : null}`}>
                    <div className="flex items-center">
                        <span className='m-2 p-1 aria_hidden ' onClick={() => {
                            setMenu(menu => !menu)
                        }}> <i className="fa-solid fa-bars aria_hidden"></i></span>
                        <Image
                            src={logo}
                            width={60}
                            height={40}
                        />
                    </div>
                    <div className="flex  items-center ">
                        <ul className={`flex m-0.5 font-bold aria_hidden2 ${menu ? 'show' : "none"}`}	>
                            <li className='m-0.5 p-2 hover:border-violet-500'><Link href='/' >
                                <a>MEN</a>
                            </Link></li>
                            <li className='m-0.5 p-2'><Link href='/' >
                                <a>WOMEN</a>
                            </Link></li>
                            <li className='m-0.5 p-2'><Link href='/' >
                                <a>KIDS</a>
                            </Link></li>
                            <li className='m-0.5 p-2'><Link href='/' >
                                <a>HOME & LIVING</a>
                            </Link></li>
                            <li className='m-0.5 p-2'><Link href='/' >
                                <a>BEAUTY</a>
                            </Link></li>
                            <li className='m-0.5 p-2'><Link href='/' >
                                <a>STUDIO</a>
                            </Link></li>
                        </ul>
                    </div>
                </div>
                <label className='w-half' >
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search" />

                    </div>
                </label>
                <div className="flex m-2 userDetail">
                    <Link href='/' >
                        <a className='flex justify-center items-center flex-col mx-1'> <i className="fa-regular fa-user "></i>
                            <p className='m-0.5'>Profile</p></a>
                    </Link>
                    <Link href='/' >
                        <a className='flex justify-center items-center flex-col mx-1'><i className="fa-regular fa-heart "></i>
                            <p className='m-0.5'>Wishlist</p></a>
                    </Link>
                    <Link href='/' >
                        <a className='flex justify-center items-center flex-col mx-1'><i className="fa-solid fa-bag-shopping "></i>   <p>Bag</p></a>
                    </Link>

                </div>
            </nav>
        </>
    )
}

export default Topnav