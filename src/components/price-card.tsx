import check from '../assets/listCheck.svg'
import Badge from './badge'

type Props = {
    plan: string,
    price: number,
    planCycle: string,
    billPlan: string,
    planBenefits: string[]
}

function PriceCard(props: Props) {
  return (
    <div className='priceTag-card'>
        <div className='priceTag-badge'><Badge content='pricing' /></div>
        <p className='card-title elem'>{props.plan}</p>
        <h1 className='elem' ><span className='dollar'>$</span>{props.price}/<span className='planCycle'>{props.planCycle}</span></h1>
        <p style={{fontSize: '20px'}} className='grey-color elem p-20'>{props.billPlan}</p>
        <ul className='benefit-list elem' style={{textAlign: 'left'}}>
            {props.planBenefits.map((benefit, index) => {
                return(
                    <li key={index} className='grey-color elem'>
                        <img src={check} alt="list decor" />
                        {benefit}
                    </li>
                )
            })}
        </ul>
        <button className="elem green-btn">Request a Demo</button>
    </div>
  )
}

export default PriceCard