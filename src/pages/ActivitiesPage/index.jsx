import './style.css'
import ActivityCard from '../../components/ActivityCard'

const ActivitiesPage = () => {
    return (
        <div className='flex flex-col gap-8 p-10'>
            <h2 className='font-bold text-3xl'>GDG Algiers Events</h2>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center'>
                <ActivityCard activityOwner="Google Developers Group" activityType="Hackathon" activityTimeStart="From: 12/01/23" activityTimeEnd="To: 16/01/23" />
                <ActivityCard activityOwner="Google Developers Group" activityType="Hackathon" activityTimeStart="From: 12/01/23" activityTimeEnd="To: 16/01/23" />
                <ActivityCard activityOwner="Google Developers Group" activityType="Hackathon" activityTimeStart="From: 12/01/23" activityTimeEnd="To: 16/01/23" />
                <ActivityCard activityOwner="Google Developers Group" activityType="Hackathon" activityTimeStart="From: 12/01/23" activityTimeEnd="To: 16/01/23" />
                <ActivityCard activityOwner="Google Developers Group" activityType="Hackathon" activityTimeStart="From: 12/01/23" activityTimeEnd="To: 16/01/23" />
                <ActivityCard activityOwner="Google Developers Group" activityType="Hackathon" activityTimeStart="From: 12/01/23" activityTimeEnd="To: 16/01/23" />
                <ActivityCard activityOwner="Google Developers Group" activityType="Hackathon" activityTimeStart="From: 12/01/23" activityTimeEnd="To: 16/01/23" />
            </div>
        </div>
    )
}

export default ActivitiesPage;