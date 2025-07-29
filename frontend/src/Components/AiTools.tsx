import '../Components/AiTools.scss'
import { AiToolsData } from '../assets/asset';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {
  const navigate = useNavigate();
  const user = useUser()
  return (
    <div className='ai-tools-container'>
     <div className="text-tools">
      <h2>PowerFul Ai Tools</h2>
      <p> Discover a suite of cutting-edge AI tools designed to boost your productivity.It faster and easier to get the job done with precision and efficiency</p>  
     </div>
     <div className="ai-tools-cart">
       {AiToolsData.map((tool,index)=>(
        <div key={index} className='cart-part' onClick={()=>user && navigate(tool.path)} >
        <div className="tool-icon" style={{ background: `linear-gradient(to right, ${tool.bg.from}, ${tool.bg.to})` }}>
        <img src={tool.icon} alt={`${tool.title} icon`} />
       </div>
         <h4 className='tool-text-part'>{tool.title}</h4>
          <p className='tool-text-part'>{tool.description}</p>
       
        </div>
       ))}
     </div>
  
    </div>
  )
}

export default AiTools  



