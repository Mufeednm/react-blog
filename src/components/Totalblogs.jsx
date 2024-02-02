import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { global } from './Global'
import { Link } from 'react-router-dom'
const Totalblogs = () => {
    const {id}=useParams()
    
  const{collect, setCollect,fulldata,setFulldata}=useContext(global)
  const result = fulldata.filter((value) =>value.id==id )
  console.log(result);
  return (
    <div>Totalblogs

<h1>{result[0].title}</h1>
<p>{result[0].blog}</p>

<br />

<Link to={"/blog"}> <button>click</button></Link>
    </div>
  )
}

export default Totalblogs