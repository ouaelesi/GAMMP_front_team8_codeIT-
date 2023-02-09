import './style.css'
import StatisticsCard from "../../components/StatisticsCard"
import StatisticSchema from "../../components/StatisticSchema"

const AnalyticsPage = () => {
    return (
        <div className='flex flex-col p-10'>
            <h1 className='font-bold text-3xl'>GDG Algiers Members Statics</h1>
            <div className='flex gap-4 mt-10 w-full'>
                <StatisticsCard totalNumber="012" cardTitle="Inactive members" cardState="failed" cardPercentage="07.3" />
                <StatisticsCard totalNumber="022" cardTitle="Active members" cardState="success" cardPercentage="17.3" />
                <StatisticsCard totalNumber="57%" cardTitle="Average Activity" cardState="success" cardPercentage="17.3" />
            </div>
            <div className='flex flex-col w-full mt-10 gap-8 items-center'>
                <div className='flex w-full items-center gap-8'>
                    <StatisticSchema schemaTitle="Member Activity" schemaMode="Line" />
                    <StatisticSchema schemaTitle="Active members by departments" schemaMode="Bar" />
                </div>
                <div className='flex w-full'>
                    <StatisticSchema schemaTitle="Projects views" schemaMode="Bar" />
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage;