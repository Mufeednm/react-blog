import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { global } from './Global'
import Totalblogs from './Totalblogs'
import { useNavigate } from 'react-router-dom'


const Blogs = () => { 
  const{collect, setCollect,fulldata,setFulldata}=useContext(global)
const navigate = useNavigate()
  return (

    <div>
      <h2>TITLE</h2>
      {
    fulldata.map((e)=>
{
  return(
    
    <div key={e} className='colour'>
    <h1>{e.title}</h1>
  <button onClick={()=>navigate(`${e.id}`)}>view more</button>
  </div>
  )

})

      }
   
     <br /><br />
      
      <Link to={"/Blog"}><button>Create NEW BLOG</button></Link>
      </div>
  )
}

export default Blogs