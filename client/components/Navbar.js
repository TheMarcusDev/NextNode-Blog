import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='links'>
                    <Link href='/MainPage'>Main Page</Link>
                    <Link href='/CreatePost'>Create Post</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;