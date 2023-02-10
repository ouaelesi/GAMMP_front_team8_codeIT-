import './style.css'
import ProfileImg from "../../assets/profile.png"

const ProfilePage = () => {
    return (
        <div className="flex flex-col gap-4 h-screen items-center justify-center p-6 border">
            <div className='p-8 rounded-lg shadow-xl border'>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <img src={ProfileImg} alt="#" />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='bg-white border rounded-lg p-10 transition hover:shadow-lg'>
                            <h4 className='text-xl font-bold p-2'>CONTACT INFORMATIONS</h4>
                            <div className='mt-5'>
                                <div className='mt-2'>
                                    <span className='font-bold'>Phone</span> : +213777363236
                                </div>
                                <div className='mt-2'>
                                    <span className='font-bold'>E-mail</span> : o.allaoua@esi-sba.dz
                                </div>
                                <div className='mt-2'>
                                    <span className='font-bold'>Discord ID</span> : ELGladiator#2003  
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border rounded-lg p-10 transition hover:shadow-lg'>
                            <h4 className='text-xl font-bold p-2'>MORE INFORMATIONS</h4>
                            <div className='mt-5'>
                                <div className='mt-2'>
                                    <span className='font-bold'>University</span> : ESI SBA
                                </div>
                                <div className='mt-2'>
                                    <span className='font-bold'>Year of study</span> : 3rd year
                                </div>
                                <div className='mt-2'>
                                    <span className='font-bold'>Status</span> : Confirmed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;