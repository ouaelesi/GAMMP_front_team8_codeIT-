import React from 'react'
import './memberRow.css'


const MemberRowDetails = (props) => {
    return (
        <div className='memberrow-container'>
            <div className='member-profile'>
                <div className='profile-img-container'>
                    <img src={require("../../assets/" + props.member.profile_pic)} alt={"../../assets/" + props.member.profile_pic} />
                </div>
                <h5 className='member-name'>{props.member.name}</h5>
            </div>
            <p className='member-discord'>{props.member.discord_id}</p>
            <div className='member-info-container'>
                <div className={props.member.status === "Active" ? "member-status-container member-active" : "member-status-container member-not-active"}>
                    <p className='member-status'>{props.member.status}</p>
                </div>
                <p className='member-departement'>{props.member.departement}</p>
                <p className='member-joiningyear'>{props.member.joining_season}</p>
            </div>
        </div>
    )
}
export default MemberRowDetails