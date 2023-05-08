import '../styles/team.css'
import Facebook from '../assets/Icons/Facebook.svg'
import Twitter from '../assets/Icons/Twitter.svg'
import { TeamMembers } from '../helpers/team-details'

function Team() {
  return (
    <>
        <div className="team-container">
          <div className="team-heading">
            <h1>Our Team is the best in business</h1>
            <p className='grey-color'>Highly professional and capable of running your Hospital.</p>
          </div>
          <div className="team-member-cards">
          {TeamMembers.map((member, index) => {
            return(
              <div className="team-member-card" key={index}>
                <div className="member-profile"><img src={member.profile} alt="Profile Photo" /></div>
                <div className="member-name"><h2 style={{fontWeight: '30', color:'black'}}>{member.name}</h2></div>
                <div className="member-designation"><h3 style={{fontWeight: '18'}} className='green-color'>{member.role}</h3></div>
                <div className="member-quote">
                  <p className='grey-color-2'>{member.quote}</p>
                </div>
                <div className="member-connect">
                    <img src={Facebook} alt="Facebook Logo" />
                    <img src={Twitter} alt="Twitter Logo" />
                </div>
            </div>
            )
          })}
          </div>
        </div>
    </>
  )
}

export default Team
