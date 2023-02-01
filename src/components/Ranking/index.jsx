import "./style.css";
import RankedProfile from "./RankedProfile.jsx";

const Ranking = () => {

    const profiles = [1,1,1,1,1];

    return (
        <>
            <div className="container bg-white flex flex-col gap-6 border w-fit p-4 rounded-lg">
                <h1 className="text-4xl font-bold">Top 10</h1>
                <div className="flex flex-col gap-4">
                    {profiles.map((elem, index) => {
                        return(
                            <RankedProfile rank={index} key={index} />     
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Ranking;