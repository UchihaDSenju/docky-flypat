import '../styles/desc.css'
import video from '../assets/video.jpg'

function Desc() {
  return (
    <div className='desc-container'>
        <div className='desc-heading content'>
            <h1>
                Every Hospital is as efficient as its tools
            </h1>
        </div>
        <div className='desc-content content'>
            <p>
                We’re different. Docky is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.
            </p>
        </div>
        <div className='desc-auth content'>
            <button className='request-btn'>
                Request a demo
            </button>
            <button className='signup-btn'>
                Sign up
            </button>
        </div>
        <div className='desc-video'>
            <img src={video} alt="" />
        </div>
    </div>
  )
}

export default Desc