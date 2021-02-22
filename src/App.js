import React from "react";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import AlienPicture from './AlienPicture.js';
import Planets from './Planets.js';
import Aliens from './Aliens.js';
import { View, Image, StyleSheet } from 'react';
import './styles.css';
import APIClient from './APIClient.js';
import HomePage from './HomePage.js';
import SplashPage from './SplashPage.js';
import AlienPage from './AlienPage.js';
import AlienButton from './AlienButton.js';

var alien;
var size;
var name;
var page;
var page1;
var alien_name1;

var alienId = 0;



export default class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      png: '',
      height: 0,
      width: 0,
      subtitle: '',
      showPlanets: false,
      showAliens: false,
      showAll: true,
      route: "splash"
    };
   // This binding is necessary to make `this` work in the callback, can be binded in the function itself
  //  this.alienSelect = this.alienSelect.bind(this);
  }


  
// alienSelect(alien, name) {
//     this.setState(state => ({
//       png:  alien,
//       subtitle: name
//     }));
//   }

// sizeSelect(size){
// this.setState(state => ({
//   height: size,
//   width: size
// }));
// }

// createOnClick(alien_name1){
//   APIClient.create(alien_name1);
// }

static async pageSelect(page1){
  
  switch (page1){
    case "home": this.setState(state => ({
      route: "home"
    }))
    break;
    case "alien": this.setState(state => ({
      route: "alien"
    }))
    break;
  }
}



//nbsp stands for no-break space
  render() {
    var { route, showPlanets, showAliens, showAll } = this.state;
    
      switch(route){
        case "home": page = <HomePage page1="home"/>
        break;
        case "splash": page = <SplashPage page1="splash"/>
        break;
        case "alien": page = <AlienPage  alienId /> //should be feeding the variable id
        
        default: page = <SplashPage />
        
            }
          


   
    return (

      <div>
    

      {/* <AlienButton title="Home" onClick={this.pageSelect.bind(this, page1="home")} >
      Home
   </AlienButton> */}

   {page}
       
  
{/* {showAll && <button onClick={this.pageSelect.bind(this, page="planets")}  class="dropbtn">
To planets page
</button>} */}

{/* {showAll && <button onClick={this.pageSelect.bind(this, page="aliens")}  class="dropbtn">
To aliens page
</button>}

{showPlanets && <Planets />}
{showAliens && <Aliens />}

{showAliens && <DropdownButton id="dropdown-basic-button" title="Select alien" variant="outline-dark">
<Dropdown.Item onClick={this.alienSelect.bind(this, alien="/grunt.png", name="Unggoy")} >Unggoy</Dropdown.Item>
<Dropdown.Item onClick={this.alienSelect.bind(this, alien="/jackal.png", name="Kig-Yar")} >Kig-Yar</Dropdown.Item>
<Dropdown.Item onClick={this.alienSelect.bind(this, alien="/elite.png", name="Sangheili")} >Sangheili</Dropdown.Item>
</DropdownButton>}

<br></br>

{showAliens && <DropdownButton id="dropdown-basic-button" title="Select height and width" variant="outline-dark">
<Dropdown.Item onClick={this.sizeSelect.bind(this, size="100")}>100 x 100</Dropdown.Item>
<Dropdown.Item onClick={this.sizeSelect.bind(this, size="200")}>200 x 200</Dropdown.Item>
<Dropdown.Item onClick={this.sizeSelect.bind(this, size="300")}>300 x 300</Dropdown.Item>
</DropdownButton>}

        
{showAliens && <AlienPicture height={this.state.height} width={this.state.width} src={this.state.png} subtitle = {this.state.subtitle} />}


<br></br>


<button onClick={this.createOnClick.bind(this, alien_name1="bowser")}> Create </button> */}

      </div>
    
    );
  }
}

