import React from 'react'
import './SeasonDiplay.css'

const seasonsConfing={
  Summer:{
    text:"Lets hit the beach",
    iconName:'sun'
  },
  Winter:{
    text:"burr it is cold",
    iconName:'snowflake'
  }
}
const getSeasons =(lat, month)=>{
  if(month>2 && month<9)
   {
     return lat>0?"Summer":'Winter'
  }
    else{
      return lat >0?'Winter':"Summer"
    };
  }
  const SeasonDisplay = props=>{
    const month = new Date().getMonth();
    const seasons =getSeasons(props.lat,month )
      
    const {text, iconName}=seasonsConfing[seasons]
     
    return (
      <div className={`season-display ${seasons}`}>

      <i className={` icon-left massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}/>
      </div>
    
    )
    
  
  }
 

export default SeasonDisplay;