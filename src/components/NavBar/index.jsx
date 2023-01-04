import './style.css'

const NavBar = () => {
    return (
        <nav className='mb-5'>
            <ul className='flex gap-10 text-bold text-red-500 underline'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;