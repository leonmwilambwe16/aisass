import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import { CreationData } from '../assets/asset';
import { Gem, Sparkle } from 'lucide-react';
import { Protect } from '@clerk/clerk-react';
import CreationItems from '../Components/CreationItems';


interface Creation{
  id:number;
  user_id:number;
  prompt:string;
  type: string;
  createdAt: string;
  content?: string;
}

const Dashboard = () => {

  const [creation,setCreation]=useState<Creation[]>([]);

  
  
  const getDashboardData = async()=>{
    setCreation(CreationData)
  }
  
    
  useEffect(()=>{
   getDashboardData()
  },[])

  return (
    <div className='dashboard-container'>
     <div className="board-first">
      <div className="total-andall">
        
        <div className='total-cart-blox'>
          <div className='box-car-simple'>
           <p>Total Creations</p>
          <h2>{creation.length}</h2>
          </div>
         
        <div> 
       <Sparkle/>
        </div>
        </div>
      </div>

      <div className="total-andall">
        <div className='total-cart-blox'>
          <div className='box-car-simple'>
           <p>Active Plan</p>
          <h2>
          <Protect plan='Premium' fallback='Free'>Premium</Protect>
          </h2>
          </div>
          
        <div> 
       <Gem/>
        </div>
        </div>
      </div>
     </div>
    
    <div className="rcreation-recent">
      <p>Recenet Creations</p>
       
          {creation.map((item) => (
          <CreationItems
            key={item.id}
            item={{
              prompt: item.prompt,
              type: item.type,
              createdAt: item.createdAt,
               content: item.content,
            }}
          />
        ))}
      
    </div>


    </div>
  );
};

export default Dashboard; 



