import React, { Component } from "react";
import slideImages from "../../data/images.json";

export class Slides extends Component {
  state = {
    imageIndex: 0,
    timerId: "",
  };

  componentDidMount() {
    this.setCurrentImagesIndex();
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  setCurrentImagesIndex() {
    let timerId = setInterval(() => {
      if (this.state.imageIndex === 4) {
        this.setState({ imageIndex: 0 });
      } else {
        this.setState({
          imageIndex: this.state.imageIndex + 1,
        });
      }
    }, 4000);
    this.setState({ timerId: timerId });
  }

  showNextImage() {
    if (this.state.imageIndex === 4) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
    }
  }

  showPreviousImage() {
    if (this.state.imageIndex === 0) {
      this.setState({ imageIndex: 4 });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex - 1,
      });
    }
  }

  render() {
    return (
      <div className="slide-container">
        <img
          src={slideImages.images[this.state.imageIndex].imageSrc}
          style={{ width: "100%" }}
          alt=" "
        />
        <input
          className="btnSlider previousBtn"
          type="button"
          value="<"
          onClick={() => this.showPreviousImage()}
        />
        <input
          className="btnSlider nextBtn"
          type="button"
          value=">"
          onClick={() => this.showNextImage()}
        />
      </div>
    );
  }
}

export default Slides;
