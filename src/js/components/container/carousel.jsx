import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
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
    const items = this.props.relatedProducts
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const items = this.props.relatedProducts
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
  const items = this.props.relatedProducts;
    // const slides = items.map((item) => {
      return (

        <CarouselItem>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>
              
            </div>
          </div>
        </CarouselItem>


        // <CarouselItem
        //   onExiting={this.onExiting}
        //   onExited={this.onExited}
        //   key={item.photo_url}
        // >
        //   <img src={item.photo_url} alt={item.altText} />
        //   <CarouselCaption captionText={item.price} captionHeader={item.title} />
        // </CarouselItem>
      );
    }
    

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default RelatedProducts;