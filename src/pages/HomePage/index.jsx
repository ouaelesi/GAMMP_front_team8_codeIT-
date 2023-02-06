import './style.css'
import Ranking from "../../components/Ranking"
import MemberRowDetails from "../../components/MemberRowDetails"
import FilterMemberDetails from "../../components/FilterMemberDetails"

const HomePage = () => {
    return (
        <div className='flex flex-col p-10'>
            <h1 className='font-bold text-3xl'>GDG Algiers Members Dashboard</h1>
            <div className='flex gap-10 mt-5 w-full'>
                <div className='flex flex-col items-center justify-start gap-2 w-[75%]'>
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
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                    <MemberRowDetails status="Not Active" />
                </div>
                <div className='w-[25%]'>
                    <Ranking />
                </div>
            </div>
        </div>
    )
}

export default HomePage;