import './style.css'
import Ranking from "../../components/Ranking"
import MemberRowDetails from "../../components/MemberRowDetails"
import FilterMemberDetails from "../../components/FilterMemberDetails"

const DashboardPage = () => {
    return (
        <div className='flex flex-col p-10'>
            <h1 className='font-bold text-3xl'>GDG Algiers Members Dashboard</h1>
            <div className='flex gap-4 mt-5 w-full'>
                <div className='flex flex-col items-center justify-start gap-2 w-[80%]'>
                    <FilterMemberDetails />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                </div>
                <div className='w-[20%]'>
                    <Ranking />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;