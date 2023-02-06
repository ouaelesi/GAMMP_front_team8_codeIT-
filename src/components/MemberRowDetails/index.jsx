import React from 'react'
import './style.css'
import Avatar from "../../assets/Avatar.png"


const MemberRowDetails = (props) => {
return (
    <div className='memberrow-container'>
        <div className='flex items-center justify-between gap-4'>
            <div className='profile-img-container'>
                <img className='w-auto h-full' src={Avatar} alt="#" />
            </div>
            <h5 className='member-name'>ALLAOUA Okba</h5>
        </div>
        <p className='member-discord'>ouael#4545</p>
        <div className={`member-status-container px-2 py-1 ${props.status === "Active" ? "member-active" : "member-not-active"}`}>
            <p className='member-status text-center'>{props.status}</p>
        </div>
        <p className='member-departement'>Game Dev</p>
        <p className='member-joiningyear'>2022</p>
    </div>
)
}
export default MemberRowDetails