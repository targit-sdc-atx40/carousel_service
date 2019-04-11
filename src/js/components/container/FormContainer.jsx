import React, { Component } from "react";
import ReactDOM from "react-dom";
import RelatedProductsCarousel from "./carousel.jsx";
import axios from 'axios';

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
      nestedItems: [
        [       
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
          { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ],
        [
         { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }, { photo_url: '', price: 0, title: '' }
        ]
      ]
    };
  }



  componentDidMount() {
    axios.get('http://ec2-18-221-92-39.us-east-2.compute.amazonaws.com/related-products')
    .then(res => {
      const relatedProducts = res.data;
      this.setState({
        items: relatedProducts
      })
      const bigArr = [];
      bigArr.push(relatedProducts.slice(0, 6));
      bigArr.push(relatedProducts.slice(6, 12));
      bigArr.push(relatedProducts.slice(12, 18));
      bigArr.push(relatedProducts.slice(18, 24));
      bigArr.push(relatedProducts.slice(24, 30));
      bigArr.push(relatedProducts.slice(30, 36));
      bigArr.push(relatedProducts.slice(36, 42));
      bigArr.push(relatedProducts.slice(42, 48));
      bigArr.push(relatedProducts.slice(48, 54));
      bigArr.push(relatedProducts.slice(54, 60));
      bigArr.push(relatedProducts.slice(60, 66));
      bigArr.push(relatedProducts.slice(66, 72));
      bigArr.push(relatedProducts.slice(72, 78));
      bigArr.push(relatedProducts.slice(78, 84));
      bigArr.push(relatedProducts.slice(84, 90));
      bigArr.push(relatedProducts.slice(90, 96));
      bigArr.push(relatedProducts.slice(96, 100));

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
          <h2>Related Products</h2>
          <h1>HIII DREW</h1>
          <RelatedProductsCarousel relatedProducts={this.state.items} nestedItems={this.state.nestedItems}/>
        </center>
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("carousel");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;