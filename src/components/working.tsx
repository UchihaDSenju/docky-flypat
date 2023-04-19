import demoVid from '../assets/demoVideo.svg'
import wavesBottom from '../assets/working-container-waves/wave-bottom.svg'
import wavesTop from '../assets/working-container-waves/wave-top.svg'
import '../styles/working.css'
import DemoPoint from './demo-point'
import { points } from '../helpers/demo-points'
import Badge from './badge'

function Working() {
  return (
    <div className='demo-container'>
      <img className='waves above' src={wavesTop} alt="waves" />
      <div className='demo-content'>
        <Badge content='how it works' />
        <div className='demo-description'>
          <div>
            <h1 className='white-color demo-heading'>Streamline Your Hospital Management with Docky</h1>
            <h1 className='white-color demo-heading-mob'>Everything you need to run your hospital</h1>
            <p style={{marginTop: '10px'}} className='grey-color p-20 demo-desc'>As a hospital owner, you know how challenging it can be to manage everything from patient records to scheduling staff. a comprehensive solution that simplifies and automates many of the tasks</p>
            <p style={{marginTop: '8px'}} className='grey-color p-20 demo-desc-mob'>Streamline your hospital management and improve patient care, Docky is the perfect solution. With a range of features designed specifically for hospital owners, increased efficiency, improved patient care, and cost savings. </p>
          </div>
          <div className='demo-video-container'><img className='demo-video' style={{width: '100%'}} src={demoVid} alt="" /></div>
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