import '../Components/Plan.scss'
import {PricingTable} from '@clerk/clerk-react'


const Plan = () => {
  return (
    <div className='plan-container'>
      <div className="text-plan">
        <h2>Choose Your Plan</h2>
      <p>Start for free amd scale up as you grow. Find the perfect plan for your content creation needs.</p>
      </div>
     
      <div className="cart-plan-payment">
        <div className="plan-content-cart">
        <PricingTable/>
      </div>
      </div>
     
    </div> 
  )
}

export default Plan 

