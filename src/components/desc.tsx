import '../styles/desc.css'
import video from '../assets/video.jpg'
import Badge from './badge'

function Desc() {
  return (
    <div className='desc-container'>
        <Badge isHeader={true} content='header' />
        <div className='desc-heading content'>
            <h1>
                Every Hospital is as <span className='desc-heading-effi'>efficient</span> as its <span className='desc-heading-tools'>tools</span>. 
            </h1>
        </div>
        <div className='desc-content content'>
            <p className='p-20'>
                We’re different. Docky is the only SaaS business platform that lets you run your business on one platform, seamlessly across all digital channels.
            </p>
        </div>
        <div className='desc-auth'>
            <button className='request-btn grey-btn'>
                Request a demo
            </button>
            <button className='signup-btn green-btn'>
                Sign up
            </button>
            <button className='watch-btn transparent-btn'>Watch Video</button>
        </div>
        <div className='desc-video'>
            <img src={video} alt="" />
        </div>
    </div>
  )
}

export default Desc