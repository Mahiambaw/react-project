import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
     
     

       // this is only time we do direct assignment 
   state ={lat:null, errorMessage:""};
  // constructor function is a functionin js 
  // define a render method 
  
componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    (postion)=>this.setState({lat:postion.coords.latitude}),
     err=>this.setState({errorMessage:err.message})
   )
}

renderCondtent(){
  if(this.state.errorMessage && !this.state.lat) {
    return <div>{this.state.errorMessage}</div>
     
 } else if (!this.state.errorMessage  && this.state.lat)
    {
     return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please allow the GeoLocation"/>
  
}


  render(){
   
      console.log(this,"this")
               
    return(
      <div className="border red">
        
        {this.renderCondtent()}
      </div>
    )
    
  
}
}

ReactDom.render(<App />, document.querySelector('#root'))