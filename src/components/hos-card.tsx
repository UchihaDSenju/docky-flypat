import {hospital} from '../helpers/hos-cards'
import '../styles/hos-card.css'

function HosCard() {
  return (
    <>
        <div className='trust-container'>
        <p>Trusted by top hospitals in the industry</p>
        </div>
        <div className='hos-cards-container'>
            {hospital.map((hos, index) => {
                return(
                    <img key={index} src={hos.img} alt="hospitals" />
                )
            })}
        </div>
    </>
  )
}

export default HosCard