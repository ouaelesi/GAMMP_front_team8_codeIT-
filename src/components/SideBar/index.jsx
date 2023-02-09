import './style.css';

const SideBar = () => {

    const navLinks = [
        {
            linkTitle: "Dashboard",
            linkHref: "#",
            linkIcon: "create-dashboard"
        },{
            linkTitle: "Analitics",
            linkHref: "#",
            linkIcon: "signal-alt-3"
        },{
            linkTitle: "profile",
            linkHref: "/profile",
            linkIcon: "signal-alt-3"
        }
    ]

    return (
        <>
            <aside className='bg-white p-8 flex items-center flex-col justify-start'>
                <div className='h-20 w-20 rounded-full bg-black'></div>
                <ul className='flex flex-col gap-2 mt-16'>
                    {navLinks.map((link) => {
                        return (
                            <li className='nav-li flex items-center justify-center text-white bg-black transition px-4 py-2 rounded-lg font-bold gap-4'>
                                <a href={link.linkHref}><i className={`uil uil-${link.linkIcon} transition`}></i> {link.linkTitle}</a>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}

export default SideBar;