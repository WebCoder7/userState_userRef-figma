import React , {memo} from 'react'
import "./Banner.css"

function Banner(props) {
    console.log(props);
  return (
    <div style={{background: props.bg}} className='banner'>
        <h1>{props.title}</h1>
        <img src={props.url} width={200} alt="" />
        <h3>{props.name }</h3>
        <button>{props.btn}</button>
    </div>
  )
}

export default  Banner