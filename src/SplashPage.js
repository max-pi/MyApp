import React, {Component} from 'react'; 
import AlienButton from './AlienButton.js';
import page1 from './App.js';
import pageSelect from './App.js';
import App from './App.js';



class SplashPage extends Component { 

 
    pageSelect1(page1){
        App.pageSelect(page1);
        // console.log("page1 is " + page1)
    }

render()



//there is a problem with App.pageSelect specifically. Functions should show as yellow. If they are light blue, then they are not referencing anything.



{
return (
<div>
<h2>This is the SplashPage page</h2>
<h1>Humanity's alien database</h1>
<AlienButton route = "HomePage" title = "Enter Database"  onClick={this.pageSelect1.bind(this, page1="home")} >  
</AlienButton> 


</div>
)
//onClick = {this.pageSelect1(this, page1="home")}
//onClick={App.pageSelect(page1="home")}
}
}


export default SplashPage; 