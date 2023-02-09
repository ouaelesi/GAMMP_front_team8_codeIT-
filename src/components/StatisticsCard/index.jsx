import './style.css'


const StatisticsCard = (props) => {
    return (
        <div className='flex gap-2 w-1/3 items-center justify-center border-transparent p-8 pr-20 bg-white rounded-xl relative'>
            <h2 className='text-5xl font-bold'>{props.totalNumber}</h2>
            <h4 className='font-bold text-lg ml-2 font-SecondFont'>{props.cardTitle}</h4>
            <div className={`flex items-center justify-start ${(props.cardState == 'success') ? 'bg-success-dark' : 'bg-failed-dark'} w-fit rounded-md border p-1 absolute right-2 top-2`}>
                <i class={`relative top-[0.5px] uil uil-arrow-up text-lg ${(props.cardState == 'success') ? '' : 'rotate-90'} ${(props.cardState == 'success') ? 'text-success' : 'text-failed'}`}></i><span className={`text-sm font-bold ${(props.cardState == 'success') ? 'text-success' : 'text-failed'}`}>{props.cardPercentage}%</span>
            </div>
        </div>
    )
}

export default StatisticsCard;