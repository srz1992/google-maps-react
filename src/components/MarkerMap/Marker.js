import React, {Component} from 'react';
/* eslint-disable no-undef */
// const FaAnchor = "@fortawesome/react-fontawesome";

import  {
    Marker,
    InfoWindow,
  } from "react-google-maps";

  class ExportMarker extends Component {
    
    constructor(props){
      super(props);
      this.state = {
        isOpen: false
      }
    }
    
    
  
      onToggleOpen = () => {
        console.log('onToggleOpen');
        
        this.setState({...this.state, isOpen: !this.state.isOpen})
      }
  
      componentWillMount() {
          this.setState({ markers: [] })
        }
      
        componentDidMount() {
          const url = [
            // Length issue
            `https://gist.githubusercontent.com`,
            `/farrrr/dfda7dd7fccfec5474d3`,
            `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
          ].join("")
      
          fetch(url)
            .then(res => res.json())
            .then(data => {
              this.setState({ markers: data.photos });
            }); 
        }
      
        render( ) {
  
          return (
            <Marker
            position={{ lat: 44.9778, lng: -93.258133 }}
            onClick={this.onToggleOpen}>
        {this.state.isOpen && 
        <InfoWindow onCloseClick={this.onToggleOpen}>
        <div>"Hello"</div> 
        </InfoWindow>}
          </Marker>
          )
        }
      }
      
      
      
  
  export default ExportMarker;
  