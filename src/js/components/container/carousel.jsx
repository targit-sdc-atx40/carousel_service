import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import { faHome, faAngleLeft, faAngleRight, faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      navLeft: '.60',
      navMiddle: '.60',
      navRight: '.60',
      leftArrow: '.60',
      rightArrow: '.60'
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    this.changeOpacityLeft = this.changeOpacityLeft.bind(this);
    this.changeOpacityMiddle = this.changeOpacityMiddle.bind(this);
    this.changeOpacityRight = this.changeOpacityRight.bind(this);
    this.goToIndexNoAnimation = this.goToIndexNoAnimation.bind(this);
    this.handleArrowLeft = this.handleArrowLeft.bind(this);
    this.handleArrowRight = this.handleArrowRight.bind(this);

  }

  handleArrowLeft(e) {
    this.setState({
      leftArrow: '1'
    })
    setTimeout(
      function() {
          this.setState({leftArrow: '.60'});
      }
      .bind(this),
      600
    );
  }

  handleArrowRight(e) {
    this.setState({
      rightArrow: '1'
    })
    setTimeout(
      function() {
          this.setState({rightArrow: '.60'});
      }
      .bind(this),
      600
    );
  }

  changeOpacityLeft(e) {
    this.setState({
      navLeft : '1',
      navMiddle : '.60',
      navRight : '.60'
    })
  }

  changeOpacityMiddle(e) {
    this.setState({
      navLeft : '.60',
      navMiddle : '1',
      navRight : '.60'
    })
  }

  changeOpacityRight(e) {
    this.setState({
      navLeft : '.60',
      navMiddle : '.60',
      navRight : '1'
    })
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const items = this.props.nestedItems;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const items = this.props.nestedItems;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  goToIndexNoAnimation(i) {
    this.setState({ activeIndex: i });
  }


  render() {
    const { activeIndex } = this.state;
    const items = this.props.nestedItems;
    const carouselNav = [];
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.photo_url}
          >
            <div class='row'>
              {item.map((container) => {
                return (
                  <div style={{fontFamily: 'HelveticaNeue', fontSize: '16px'}} class="col-md-2" onClick={() => {changeItem(container.sku)}}>
                    <div style={{}}>
                      <img src={container.photo_url} style={{ height: '100px', width: '125px'}}/>
                    </div>
                    <p style={{color: 'rgb(204, 0, 0)', fontWeight: 'bold', fontSize: '16px', margin: '0px', lineHeight: '1.4285'}}>{container.price}</p>
                    <p style={{height: '50px', margin: '0px', color: 'rgb(51, 51, 51)', fontSize: '16px', fontFamily: 'HelveticaNeue', lineHeight: '1.4285'}}>{container.title}</p>
                  </div>
                ) 
              })}
            </div> 
          </CarouselItem>
        );
      });
      
  
      return (
        <div style={{width: '90%', minWidth: '20em'}}>
          <div style={{margin: '0px', display: 'table'}}>
            <FontAwesomeIcon icon={faAngleLeft} size='3x'style={{color: 'rgb(204, 0, 0)', verticalAlign: 'middle', opacity: this.state.leftArrow}}
              onClick={ () => {this.previous(); this.handleArrowLeft()}}>
            </FontAwesomeIcon>
            <div style={{ display: 'table-cell', width: '100%'}}>
              <Carousel
                style={{display: 'table-cell'}}
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              > 
                {slides}
              </Carousel>
            </div>
            <FontAwesomeIcon icon={faAngleRight} size='3x'style={{color: 'rgb(204, 0, 0)', verticalAlign: 'middle', opacity: this.state.rightArrow}}
              onClick={() => {this.next(); this.handleArrowRight();}}>
            </FontAwesomeIcon>
          </div>
          <center>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faDotCircle} color= 'rgb(204, 0, 0)'
                onClick={() =>  {this.goToIndexNoAnimation(0); this.changeOpacityLeft();}}
                style={{verticalAlign: 'top', marginLeft: '5px', marginRight: '5px', opacity: this.state.navLeft}}
                />
              </div>

              <div>
                <FontAwesomeIcon icon={faDotCircle} color= 'rgb(204, 0, 0)'
                onClick={() => {this.goToIndexNoAnimation(8); this.changeOpacityMiddle();}}
                style={{verticalAlign: 'top', marginLeft: '5px', marginRight: '5px', opacity: this.state.navMiddle}}
                />
              </div>

              <div>
                <FontAwesomeIcon icon={faDotCircle} color= 'rgb(204, 0, 0)'
                onClick={() => {this.goToIndexNoAnimation(16); this.changeOpacityRight();}}
                style={{verticalAlign: 'top', marginLeft: '5px', marginRight: '5px', opacity: this.state.navRight}}
                />
              </div>
            </div>
          </center>
        </div>
      );
    }
  }
  
export default RelatedProducts;