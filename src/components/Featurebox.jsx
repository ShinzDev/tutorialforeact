import React from 'react'

function Featurebox(props) {
  return (
    <div>
      <div className="a-box">
            <div className="a-b-img">
                <img src={props.image}/>
            </div>
        </div>
        <div className="s-b-text">
            <h2>{props.title}</h2>
        </div>
    </div>
  )
}

export default Featurebox
