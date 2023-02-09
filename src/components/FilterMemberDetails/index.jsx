import './style.css'

const FilterMemberDetails = () => {
return (
    <div className='searchrow-container gap-8'>
        <div className='flex items-center relative'>
            <input type="text" className='w-full outline-none text-xs border rounded-lg p-1 pr-7 bg-main-bg placeholder:text-black' placeholder='Search Name' />
            <i className="uil uil-search absolute right-2"></i>
        </div>
        <div className='flex items-center relative'>
            <input type="text" className='w-full outline-none text-xs border rounded-lg p-1 pr-7 bg-main-bg placeholder:text-black' placeholder='Search Discord ID' />
            <i className="uil uil-search absolute right-2"></i>
        </div>
        <div>
            <select defaultValue={"Status"} className='text-sm outline-none font-bold cursor-pointer bg-white w-full'>
                <option disabled>Status</option>
                <option value="Active">Active</option>
                <option value="Not Active">Not Active</option>
            </select>
        </div>
        <div>
            <select defaultValue={"Departement"} className='text-sm outline-none font-bold cursor-pointer bg-white w-full'>
                <option disabled>Departement</option>
                <option value="Design">Design</option>
                <option value="Game Dev">Game Dev</option>  
                <option value="Dev">Dev</option>
                <option value="Marketing">Marketing</option>         
                <option value="Android Dev">Android Dev</option>
            </select>
        </div>
        <div>
            <select defaultValue={"Joining Year"} className='text-sm outline-none font-bold cursor-pointer bg-white w-full'>
                <option disabled>Joining Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    </div>
)
}

export default FilterMemberDetails;