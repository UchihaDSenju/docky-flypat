import '../styles/desc.css'
import Illustration from '../assets/desc-Illustration.svg'

function Desc() {
  return (
    <>
        <div className="desc-container">
            <div className="desc">
                <h1>Knocking Down Hurdles and Paving the Path for Excellence</h1>
                <p className='grey-color'>
                The power of teamwork
Behind every great human achievement, there is a team.
From a health center to a Hospital, our products help teams all over the planet advance humanity through the power of software.
Our mission is to help unleash the potential of every team.
                </p>
            </div>
            <div className="desc-img"><img src={Illustration} alt="" /></div>
        </div>
    </>
  )
}

export default Desc