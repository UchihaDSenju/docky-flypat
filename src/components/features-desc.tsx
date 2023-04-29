import { features } from '../helpers/features'
import '../styles/features.css'
import Badge from './badge'
function Features() {
  return (
    <div id='product' className='feature-container'>
      <Badge content='features' />
        <h1 className='feature-content feature-heading'>Everything you need</h1>
        <p className='grey-color feature-content p-20'>To streamline your hospital management and improve patient care, Docky is the perfect solution with a range of features designed specifically for hospital owners, increased efficiency, improved patient care and cost savings.</p>
        <div className='feature-cards'>
            {features.map((fdesc, index) => {
              return(
                <div key={index} className="feature-card">
                  <div className='icon'><img src={fdesc.icon} alt="icon" /></div>
                  <div className="feature-card-content">
                    <h3 style={{margin: '20px'}}>{fdesc.title}</h3>
                    <p className='grey-color' style={{marginTop: '20px'}}>{fdesc.desc}</p>
                  </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Features