import icon from "../../assets/react.svg";

const RankedProfile = (props) => {
    return (
        <div className="flex flex-row justify-center gap-4 rounded-md border border-[#e7e7e7] max-w-[420px] px-4 py-2">
            <div className="flex items-center"> 
                <h3 className={`${(props.rank == 0) ? 'text-success' : ''} text-4xl font-bold`}>{props.rank+1}</h3>
            </div>
            <div className="flex flex-col items-center">
                <div className="rounded-full h-[50px] w-[50px] border flex items-center justify-center border-[#e7e7e7]">
                    <img src={icon} alt="#" />
                </div>
                <h4 className="text-lg text-center md:text-center font-bold">ALLAOUA Okba</h4>
            </div>
        </div>
    )
}

export default RankedProfile;