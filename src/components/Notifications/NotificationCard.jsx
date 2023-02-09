import PersonImg from "../../assets/person.png"

const NotificationCard = () => {
    return (
        <div className="border rounded-lg p-4 bg-white flex flex-row gap-4">
            <div className="w-1/3 flex items-center justify-center">
                <img src={PersonImg} className='w-full h-full' alt="#" />
            </div>
            <div className="w-1/3 flex flex-col justify-between items-center">
                <h3 className="text-2xl flex"><span className="text-blue-400 font-bold">Ouael Sahbi</span> added for you one point</h3>
                <div>
                    Jan22, 9:31AM
                </div>
            </div>
            <div className="w-1/3 flex justify-end items-center">
                <i className="uil uil-times text-2xl"></i>
            </div>
        </div>
    )
}

export default NotificationCard