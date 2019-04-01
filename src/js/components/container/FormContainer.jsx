import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    
    return (
      <div>
        <p>FormContainer</p>
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;