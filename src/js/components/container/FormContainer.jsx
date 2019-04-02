import React, { Component } from "react";
import ReactDOM from "react-dom";
import RelatedProductsCarousel from "./carousel.jsx";
import axios from 'axios';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  componentDidMount() {
    axios.get('related-products')
    .then(res => {
      const relatedProducts = res.data;
      this.setState({
        items: relatedProducts
      })
      this.render()
    })
    .catch(console.error);
  }
  
  render() {
    
    return (
      <div>
        <center>
          <h2>Related Products</h2>
          <RelatedProductsCarousel relatedProducts={this.state.items}/>
        </center>
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;