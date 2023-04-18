import React from 'react'
import PriceCard from './price-card'
import '../styles/pricing.css'
import { prices } from '../helpers/priceTags'
import Badge from './badge'

function Pricing() {
  return (
    <div className='pricing-container'>
      <Badge content='pricing' />
      <h1 className='pricing-heading' style={{marginBottom: '20px', textAlign: 'center'}}>Flexible pricing plan for your startup</h1>
      <p style={{marginBottom: '60px', textAlign: 'center'}}>Prices that scale with your business immediately</p>
      <div className='priceTag-cards'>
        {prices.map((p, index) => {
          return(
            <PriceCard key={index} plan={p.plan} price={p.price} planCycle={p.planCycle} billPlan={p.billPlan} planBenefits={p.planBenefits}/>
          )
        })}
      </div>
    </div>
  )
}

export default Pricing