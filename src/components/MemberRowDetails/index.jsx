import './style.css'
import Avatar from "../../assets/Avatar.png"


const MemberRowDetails = (props) => {
return (
    <div className='memberrow-container gap-8'>
        <div className='flex items-center gap-4'>
            <div className='profile-img-container'>
                <img className='w-auto h-full' src={Avatar} alt="#" />
            </div>
            <h5 className='member-name'>ALLAOUA Okba</h5>
        </div>
        <p className='member-discord'>ouael#4545</p>
        <div className='min-w-[100px]'>
            <div className={`member-status-container px-2 py-1 ${props.status === "Active" ? "member-active" : "member-not-active"}`}>
                <p className='member-status text-center'>{props.status}</p>
            </div>
        </div>
        <div>
            <p className='member-departement'>Game Dev</p>
        </div>
        <div>
            <p className='member-joiningyear'>2022</p>
        </div>
    </div>
)
}
export default MemberRowDetails