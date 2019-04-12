import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';


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
                    <div style={{minHeight: '100px', minWidth: '125px', margin: '0px'}}>
                      <img src={container.photo_url} style={{ maxHeight: '75px', maxWidth: '125px', display: 'flex', margin: '0px'}}/>
                    </div>
                    <p style={{color: 'rgb(204, 0, 0)', fontWeight: 'bold', fontSize: '16px', margin: '0px', lineHeight: '1.4285'}}>{container.price}</p>
                    <p style={{margin: '0px', color: 'rgb(51, 51, 51)', fontSize: '16px', fontFamily: 'HelveticaNeue', lineHeight: '1.4285'}}>{container.title}</p>
                  </div>
                ) 
              })}
            </div> 
          </CarouselItem>
        );
      });
      
  
      return (
        <div>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          ><CarouselIndicators 
            items={items} 
            activeIndex={activeIndex} 
            onClickHandler={this.goToIndex} />
            {slides}
          </Carousel>
          <button 
          style={{
            backgroundColor:'rgb(204, 0, 0)', 
            color: 'white', 
            fontFamily: 'Helvetica',
            border: 'none',
            float: "left"
          }} 
          onClick={this.previous}>prev</button>
          <button 
          style={{
            backgroundColor:'rgb(204, 0, 0)', 
            color: 'white', 
            fontFamily: 'Helvetica',
            border: 'none',
            float: 'right',
            }} 
          onClick={this.next}>next</button>
        </div>
      );
    }
  }
  
export default RelatedProducts;