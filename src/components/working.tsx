import demoVid from '../assets/demoVideo.svg'
import wavesBottom from '../assets/working-container-waves/wave-bottom.svg'
import wavesTop from '../assets/working-container-waves/wave-top.svg'
import '../styles/working.css'
import DemoPoint from './demo-point'
import { points } from '../helpers/demo-points'

function Working() {
  return (
    <div className='demo-container'>
      <img className='waves above' src={wavesTop} alt="waves" />
      <div className='demo-content'>

        <div className='demo-description'>
          <div>
            <h1 className='white-color'>Gain more insight into how people use your</h1>
            <p style={{marginTop: '10px'}} className='grey-color'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.</p>
          </div>
          <div><img style={{width: '100%'}} src={demoVid} alt="" /></div>
        </div>

        <div className='demo-points'>
          {points.map((point, index) => {
            return(
              <DemoPoint key={index} number={index+1} point={point.point} desc={point.desc} />
            )
          })}
        </div>

      </div>
      <img className='waves below' src={wavesBottom} alt="waves" />
    </div>
  )
}

export default Working