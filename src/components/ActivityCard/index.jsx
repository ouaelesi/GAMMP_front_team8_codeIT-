import './style.css'
import ClubLogo from "../../assets/logo.jpg"

const ActivityCard = (props) => {
    return (
        <div className="flex flex-col px-4 py-8 border items-center rounded-xl w-full gap-4 bg-white transition hover:shadow-xl cursor-pointer">
            <h3 className='font-bold text-2xl text-center'>{props.activityOwner}</h3>
            <div className="club-img flex justify-center gap-4 items-center">
                <div className='rounded-full w-10 h-10 lg:w-20 lg:h-20 border'>
                    <img className='w-full h-full rounded-full' src={ClubLogo} alt="#" />
                </div>
                <h5 className='text-xl'>{props.activityType}</h5>
            </div>
            <div className='flex mt-5 items-center justify-center p-2 bg-black text-white rounded-2xl w-1/2 max-w-[300px]'>
                {props.activityTimeStart}
            </div>
            <div className='flex items-center justify-center p-2 bg-black text-white rounded-2xl w-1/2 max-w-[200px]'>
                {props.activityTimeEnd}
            </div>
        </div>
    )
}

export default ActivityCard;