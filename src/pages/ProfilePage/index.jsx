import './style.css'
import ProfileImg from "../../assets/profile.png"

const ProfilePage = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <div>
                    <div>
                        <img src={ProfileImg} alt="#" />
                    </div>
                </div>
                <div>
                    <h4>CONTACT INFORMATIONS</h4>
                    <div>
                        Phone : +213777363236
                    </div>
                    <div>
                        E-mail : o.allaoua@esi-sba.dz
                    </div>
                    <div>
                        Discord ID :  
                    </div>
                </div>
                <div>
                    <h4>MORE INFORMATIONS</h4>
                    <div>
                        University : ESI SBA
                    </div>
                    <div>
                        Year of study : 3rd year
                    </div>
                    <div>
                        Status : Confirmed
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;