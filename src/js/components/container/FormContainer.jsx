import React, { Component } from "react";
import ReactDOM from "react-dom";
import RelatedProductsCarousel from "./carousel.jsx";
import axios from 'axios';
import nestedItemsData from './nestedItems.js'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          photo_url: '',
          price: 0,
          title: ''
        }
      ],
      nestedItems: nestedItemsData
    };
  }

  componentDidMount() {
    axios.get('http://ec2-18-221-92-39.us-east-2.compute.amazonaws.com:3004/related-products')
    .then(res => {
      const relatedProducts = res.data;
      this.setState({
        items: relatedProducts
      })
      
      const bigArr = [];

      for (let i = 0; i < relatedProducts.length; i += 6) {
        bigArr.push(relatedProducts.slice(i, i + 6));
      }
      
      this.setState({
        nestedItems: bigArr
      })
    })
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <center>
          <h2 style={{fontFamily: 'Helvetica'}}>Recommended</h2>
          <RelatedProductsCarousel relatedProducts={this.state.items} nestedItems={this.state.nestedItems}/>
        </center>
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("carousel");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;