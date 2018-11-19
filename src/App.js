import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import LinkForm from './Components/LinkForm/LinkForm';
import FaceImage from './Components/FaceImage/FaceImage';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: '662f12acec1b4786be53a14982ed9276'
});

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
      enable: true,
      value_area: 800
      }
    }
  }
   
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      input : '' ,
      imageUrl: '' ,
      box: {},
      route: '',
      isSignedIn: false
    }
  }


  faceLocation = (data) => {
    const faceCoordinate = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(faceCoordinate);
    const image = document.getElementById('imageInput');
    const imageHeight = Number(image.height);
    const imageWidth = Number(image.width);
    console.log(imageHeight);
    console.log(imageWidth);
    return{
      leftCol: faceCoordinate.left_col * imageWidth,
      topRow: faceCoordinate.top_row * imageHeight,
      rightCol: imageWidth - (faceCoordinate.right_col * imageWidth),
      bottomRow: imageHeight - (faceCoordinate.bottom_row * imageHeight)
      } 
    }


  faceBox = (box) => {
   // console.log(box);
    this.setState({box: box})
  }

  onInput = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = (event) => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.faceBox((this.faceLocation(response))))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    console.log(route);
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
        params ={particleOptions} />
        <Navigation onRouteChange = {this.onRouteChange} route={this.state.route}/>
        { 
          this.state.route ==='home' 
         ? <div>
            <Logo />
            <Rank />
            <LinkForm 
            onInput={this.onInput} 
            onSubmit={this.onSubmit}
            />
            <FaceImage box = {this.state.box} imageUrl = {this.state.imageUrl} />
          </div> 
          :(this.state.route === 'signin'?
            <Signin onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />           
            )
         
        }
      </div>
    );
  }
}

export default App;
