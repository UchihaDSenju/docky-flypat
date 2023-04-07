import { features } from '../helpers/features'
import '../styles/features.css'
function Features() {
  return (
    <div className='feature-container'>
        <h1 className='feature-content'>Gain more insight into how people use your</h1>
        <p className='feature-content'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</p>
        <div className='feature-cards'>
            {features.map((fdesc) => {
              return(
                <div className="feature-card">
                  <div className='icon'>{fdesc.icon}</div>
                  <h3>{fdesc.title}</h3>
                  <p style={{marginTop: '20px'}}>{fdesc.desc}</p>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Features