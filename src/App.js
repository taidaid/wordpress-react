import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.post = React.createRef();
    this.state = {
      isOpen: false,
      sections: [],
      current: null,
      dataRoute: "http://134.209.79.128/wp-json/sections/v1/post"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(this);
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(sections =>
        this.setState((prevState, props) => {
          return { sections: sections.map(this.mapSection) };
        })
      );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  mapSection(section) {
    return {
      img: section.acf.image,
      src: section.acf.image.url,
      title: section.post_title,
      key: section.post_title,
      description: section.post_content,
      author: {
        name: section.acf.author_name,
        link: section.acf.author_link
      }
    };
  }
  handleScroll() {
    const images = document.getElementsByClassName("column");
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      // const computedStyles = window.getComputedStyle(i);
      if (
        images[i].getBoundingClientRect().top >= 0 &&
        images[i].getBoundingClientRect().bottom <= 0
      ) {
        console.log("image", i);
        console.log("bottom", images[i].getBoundingClientRect().bottom);
        console.log("top", images[i].getBoundingClientRect().top);
      } else if (
        images[i].getBoundingClientRect().top <= 0 &&
        images[i].getBoundingClientRect().bottom >= 0
      ) {
        console.log("image", i);
        console.log("bottom", images[i].getBoundingClientRect().bottom);
        console.log("top", images[i].getBoundingClientRect().top);
      }
    }
    // console.log(
    //   document.getElementsByClassName("column")[1].getBoundingClientRect().top
    // );
  }

  // throttled(delay, fn) {
  //   let lastCall = 0;
  //   return function(...args) {
  //     const now = new Date().getTime();
  //     if (now - lastCall < delay) {
  //       return;
  //     }
  //     lastCall = now;
  //     return fn(...args);
  //   };
  // }

  // throttleEventHandler = this.throttled(500, this.handleScroll);

  render() {
    return (
      <div className="App">
        <div>
          {console.log(this.state.sections)}
          {this.state.sections.map((section, i) => (
            <div className="column" key={i} id={i}>
              <img
                className="image"
                alt=""
                src={section.src}
                height={section.img["small-height"]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
