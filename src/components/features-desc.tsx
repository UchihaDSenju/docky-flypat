import { features } from '../helpers/features'
import '../styles/features.css'
import Badge from './badge'
function Features() {
  return (
    <div className='feature-container'>
      <Badge content='features' />
        <h1 className='feature-content feature-heading'>Gain more insight into how people use your</h1>
        <p className='grey-color feature-content p-20'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</p>
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