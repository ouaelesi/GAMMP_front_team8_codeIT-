import { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png'
import './style.css';

const SideBar = () => {

    const navLinks = [
        {
            linkTitle: "Dashboard",
            linkHref: "/",
            linkIcon: "create-dashboard"
        },{
            linkTitle: "Analitics",
            linkHref: "/analytics",
            linkIcon: "signal-alt-3"
        },{
            linkTitle: "Profile",
            linkHref: "/profile",
            linkIcon: "user"
        },{
            linkTitle: "Activities",
            linkHref: "/activities",
            linkIcon: "apps"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <aside className='bg-white p-10 flex items-center flex-col justify-start'>
                <div className='h-20 w-20 rounded-full'>
                    <img src={profile} className='w-full h-full rounded-full' alt="#" />
                </div>
                <ul className='flex flex-col gap-4 mt-6'>
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index} className={`${(index == currentIndex) ? 'selectedAnchor' : ''} nav-li flex items-center justify-center transition px-4 py-2 rounded-lg font-bold gap-4`}>
                                <Link onClick={() => {setCurrentIndex(index)}} to={link.linkHref}><i className={`uil uil-${link.linkIcon} transition`}></i> {link.linkTitle}</Link>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}

export default SideBar;