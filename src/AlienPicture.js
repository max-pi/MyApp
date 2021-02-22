import React, {Component} from 'react'; 
  
class AlienPicture extends Component { 


    render() 
    { 
        return (    
      
<div>
        <img  
        
            height = {this.props.height}
            width = {this.props.width}
            src = {this.props.src}
            

> 

           </img>
           
           <figcaption> {this.props.alienId} </figcaption>
           </div>
           )
  } 
}   
  
//note that in state you should put = {style{height:10}}
export default AlienPicture; 