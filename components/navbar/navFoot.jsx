import Link from "next/link"

const NavFoot = () => {
    return (
        <div className="anti_userDetail items-center justify-around bg-rose-400 sticky bottom-0 w-full rounded-t-lg">
            <div className="flex mt-2 p-2  items-center justify-around anti_userDetail">
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
        </div>
    )
}

export default NavFoot