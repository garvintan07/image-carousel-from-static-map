import React from "react";
import styled from "styled-components";
import images from "../../../images.js";
import ListImages from "./ListImages.jsx";
// import Image from "../style/ListImages.jsx";
import Map from "./Map.jsx";

const Wrapper = styled.div`
  display: float;
  position: absolute;
  width: 146%; /* overflow: hidden; */
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;
const Slider = styled.div`
  position: relative;
  max-width: 440px;
  margin: 0 auto;
`;

const Portrait = styled.div`
  height: 32%;
  width: 70%;
  left: 10%;
`;

const Img = styled.img`
  width: 94%;
  height: 24%;
  margin-left: 5px;
`;

const Button1 = styled.div`

z-index: 1;
    position: absolute;
    top: 20%;
    left: 3%;
  button {
    height: 33px;
    background:transparent
    width: 33px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 27px;
    &:hover {
      background-color: #f3f3f3;
      border-color: #f3f3f3;
    }
  }
`;

const Button2 = styled.div`
  position: absolute;
  z-index: 1;
  left: 92%;
  top: 20%;
  button {
    height: 33px;
    width: 33px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 27px;
    &:hover {
      background-color: #f3f3f3;
      border-color: #f3f3f3;
    }
  }
`;

const Parent = styled.div`
  text-align: center;
  position: relative;
  width: 46%;
  overflow: hidden;

  left: 10%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images, //all the images
      image: images[0] //first image
    };
    this.nextProperty = this.nextProperty.bind(this);
    this.prevProperty = this.prevProperty.bind(this);
    this.getImagesFromDB = this.getImagesFromDB.bind(this);
  }

  getImagesFromDB() {
    fetch("/images")
      .then(res => res.json())
      .then(result => {
        this.setState({ images: result });
      });
  }

  componentDidMount() {
    this.getImagesFromDB();
  }

  nextProperty() {
    const newIndex = this.state.image.id + 1;

    this.setState({
      image: images[newIndex]
    });
  }

  prevProperty() {
    const newIndex = this.state.image.id - 1;

    this.setState({
      image: images[newIndex]
    });
  }

  render() {
    const { images, image } = this.state;
    return (
      <Parent>
        <Portrait>
          <Button1>
            <button
              onClick={this.nextProperty}
              hidden={image.id === images.length - 4}
            >
              &#8250;
            </button>
          </Button1>
          <Button2>
            <button onClick={this.prevProperty} hidden={image.id === 0}>
              &#8249;
            </button>
          </Button2>
          <Slider>
            <Wrapper
              style={{
                transform: `translateX(-${this.state.image.id *
                  (665 / this.state.images.length)}%)`
              }}
            >
              {images.map(img => {
                return <ListImages key={img.id} img={img} />;
              })}
            </Wrapper>
          </Slider>
        </Portrait>
        <Img src="https://map101.s3-us-west-1.amazonaws.com/Screen+Shot+2020-02-03+at+5.25.15+PM.png"></Img>
        {images.map(img => {
          return <Map key={img.id} id={img.id} />;
        })}
      </Parent>
    );
  }
}

export default App;
