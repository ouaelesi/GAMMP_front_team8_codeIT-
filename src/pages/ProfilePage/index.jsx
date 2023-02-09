import './style.css'
import NavBar from '../../components/NavBar';

import profilePicture from '../../assets/Avatar.png';

const ProfilePage = () => {

    const goToEditPage = (e) => {
        window.location.href = '/profile/edit';
    }

    const editButton = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mr-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>

    const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  

    
    return (
        <>
            <NavBar/>
            <div id='container'>

                <div id='profile-container' className='w-[70%] mt-10 self-center grid grid-cols-4 grid-flow-cols'>
                    
                    <div className='flex justify-center'>

                        <img src={profilePicture} alt="profile picture" 
                        className='rounded-full border-2 border-solid border-[#777]'/>
                    </div>

                    <div id='info-container' className='h-20 col-span-2 flex flex-col justify-center items-center'>

                        <h2 className='w-60'>Ali Mekki &nbsp;&nbsp;&nbsp;&nbsp; {locationIcon} Algeria</h2>

                        <h4 className='underline'>Manager</h4>

                        

                    </div>

                    <div id='edit-container' className='flex justify-end items-start'>
                        
                        <button type='button' onClick={goToEditPage}
                        className='font-bold w-[100px] py-2 px-4 rounded-3xl bg-blue-500 text-white hover:bg-blue-700'>
                            {editButton}Edit
                        </button>
                    </div>


                </div>

                <section id='contact-information'
                className='flex flex-col items-center'>
                    {/* flex container */}
                    <h2 className='ml-16 underline self-start'>Contact Information</h2>

                    <div className='info-box'>
                        <p className='info-title'>Email: </p> <p>alimekki@gmail.com</p>
                    </div>

                    <div className='info-box'>
                        <p className='info-title'>Phone Number: </p> <p>+1234567890</p>
                    </div>

                    <div className='info-box'>
                        <p className='info-title'>Discord ID: </p> <p>#onesjfds</p>
                    </div>
                </section>
                
                <section id='more-information'
                className='flex flex-col items-center'>
                    {/* flex container */}
                    <h2 className='ml-16 underline self-start'>More Information</h2>

                    <div className='info-box'>
                        <p className='info-title'>University: </p> <p>+1234567890</p>
                    </div>

                    <div className='info-box'>
                        <p className='info-title'>Year of study: </p> <p>3rd year</p>
                    </div>

                    <div className='info-box'>
                        <p className='info-title'>Status</p> <p>confirmed</p>
                    </div>

                    <div className='info-box h-[100px] flex flex-col'>
                        <p className='self-left'>Contributions</p>
                        <ul>
                            <li>
                                <p className='info-title'>GDG CTF: </p> <p>Project Manager</p>
                            </li>
                            <li>
                                <p className='info-title'>DevFest: </p> <p>Organizer</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProfilePage;