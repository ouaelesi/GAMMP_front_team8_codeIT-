import './style.css'
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, plugins } from "chart.js/auto"

const StatisticSchema = (props) => {

    const options = {
        plugins: {
          legend: {
            display: false,
          }
        },
      };

    return (
        <div className='flex flex-col p-8 pb-32 w-[49%] gap-8 border rounded-xl bg-white'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <span className='bg-black py-2 rounded-sm w-3 h-6'></span>
                    <h5 className='font-bold font-SecondFont'>{props.schemaTitle}</h5> 
                </div>
                <select className=' cursor-pointer p-2 rounded-md border text-gray-500' defaultValue={"Monthly"}>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                </select>
            </div>
            <div>
                {(props.schemaMode == "Line") && <Line
                    datasetIdKey='id'
                    options={options}
                    data={{
                    backgroundColor: 'red',
                    labels: ['Jun', 'Jul', 'Aug', 'Sept', 'Oct'],
                    datasets: [
                                {
                                    id: 1,
                                    data: [5, 24, 7, 18, 36],
                                    borderColor: 'blue',
                                    
                                }
                            ]
                    }}
                />}
                {(props.schemaMode == "Bar") && <Bar
                    datasetIdKey='id' options={options}
                    data={{
                    labels: ['Jun', 'Jul', 'Aug', 'Sept', 'Oct'],
                    datasets: [
                                {
                                    id: 1,
                                    data: [5, 24, 7, 18, 36],
                                    backgroundColor: ['red', 'yellow', 'green']
                                }
                            ]
                    }}
                />}
  
            </div>
        </div>
    )
}

export default StatisticSchema;