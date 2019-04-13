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
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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


  render() {
    const { activeIndex } = this.state;
    const items = this.props.nestedItems;
    const carouselNav = [];
    for (let i = 0; i < items.length; i++) {
      let indexObj = {index: i}
      carouselNav.push(indexObj);
    }
      const navDots = carouselNav.map((item) => {
        return (
          <>
            <FontAwesomeIcon icon={faDotCircle} color= 'rgb(204, 0, 0)'
            onClick={() => this.goToIndex(item.index)}
            />
          </>
        )
      })
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
        <div>
          <div style={{margin: '0px', display: 'table'}}>
            <FontAwesomeIcon icon={faAngleLeft} size='3x'style={{color: 'rgb(204, 0, 0)', verticalAlign: 'middle', opacity: '.6'}}
              onClick={this.previous}>
            </FontAwesomeIcon>
            <div style={{ display: 'table-cell', minWidth: '1000px'}}>
              <Carousel
                style={{display: 'table-cell'}}
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              > 
                {slides}
              </Carousel>
            </div>
            <FontAwesomeIcon icon={faAngleRight} size='3x'style={{color: 'rgb(204, 0, 0)', verticalAlign: 'middle', opacity: '.6'}}
              onClick={this.next}>
            </FontAwesomeIcon>
          </div>
          {navDots}
        </div>
      );
    }
  }
  
export default RelatedProducts;