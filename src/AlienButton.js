import React, {Component} from 'react'; 
  
class AlienButton extends Component { 


render()
{
return (
<div>
<button onClick={this.props.onClick}    >
{this.props.title}
</button>
</div>
)

}
}


export default AlienButton; 