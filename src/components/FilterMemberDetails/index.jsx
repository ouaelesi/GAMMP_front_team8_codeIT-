import './style.css'

const FilterMemberDetails = () => {
return (
    <div className='searchrow-container'>
        <div className='flex items-center relative'>
            <input type="text" className='outline-none border rounded-lg p-1 pr-0 bg-main-bg placeholder:text-black' placeholder='Search Name' />
            <i class="uil uil-search absolute right-2"></i>
        </div>
        <div className='flex items-center relative'>
            <input type="text" className='outline-none border rounded-lg p-1 pr-0 bg-main-bg placeholder:text-black' placeholder='Search Discord ID' />
            <i class="uil uil-search absolute right-2"></i>
        </div>
        <select className='outline-none font-bold cursor-pointer'>
            <option disabled selected>Status</option>
            <option value="Active">Active</option>
            <option value="Not Active">Not Active</option>
        </select>
        <select className='outline-none font-bold cursor-pointer'>
            <option disabled selected>Departement</option>
            <option value="Design">Design</option>
            <option value="Game Dev">Game Dev</option>  
            <option value="Dev">Dev</option>
            <option value="Marketing">Marketing</option>         
            <option value="Android Dev">Android Dev</option>
        </select>
        <select className='outline-none font-bold cursor-pointer'>
            <option disabled selected>Joining Year</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>
)
}

export default FilterMemberDetails;