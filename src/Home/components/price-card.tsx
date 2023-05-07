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
        <h1 className='elem' ><span className='dollar'>$</span>{props.price}<span className='planCycle'>/User/{props.planCycle}</span></h1>
        <p style={{fontSize: '20px'}} className='grey-color elem p-20'>{props.billPlan}</p>
        <ul className='benefit-list elem' style={{textAlign: 'left'}}>
            {props.planBenefits.map((benefit, index) => {
                return(
                    <li key={index} className='grey-color elem'>
                        <img src={check} alt="list decor" />
                        <p className='price-tag-benefit grey-color'>{benefit}</p>
                    </li>
                )
            })}
        </ul>
        <a target='_blank' href="https://4sjorkcf2bx.typeform.com/to/Ju4qODxE"><button style={{width: '100%'}} className="elem green-btn white-color">Request a Demo</button></a>
    </div>
  )
}

export default PriceCard