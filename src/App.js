import React, { Component } from "react";
// import Header from "./components/Header";
import Loading from "./components/Loading";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "../node_modules/react-popupbox/dist/react-popupbox.css";
import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import Section from "./components/Section";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
  }
  state = {
    isOpen: false,
    sections: [],
    current: null,
    dataRoute: "http://134.209.79.128/wp-json/wp/v2/posts"
  };

  // Need to be able to reference the dynamically created elements that contain the images I
  // want to center on. Then calculate the position of the image in relation to the viewport,
  // determine which image is closest to center and then center the view on the image.
  //   scrollToImageCenter(imageElements[]) {
  //     checkvisible(imageElements[])

  //   }

  //   viewPortHeight() {
  //     var de = document.documentElement;

  //     if(!!window.innerWidth)
  //     { return window.innerHeight; }
  //     else if( de && !isNaN(de.clientHeight) )
  //     { return de.clientHeight; }

  //     return 0;
  // }

  // scrollY() {
  //   if( window.pageYOffset ) { return window.pageYOffset; }
  //   return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  // }

  // posY(elm) {
  //   var test = elm, top = 0;

  //   while(!!test && test.tagName.toLowerCase() !== "body") {
  //       top += test.offsetTop;
  //       test = test.offsetParent;
  //   }

  //   return top;
  // }

  // checkvisible( elm ) {
  //   var vpH = viewPortHeight(), // Viewport Height
  //       st = scrollY(), // Scroll Top
  //       y = posY(elm);

  //   return (y > (vpH + st));
  // }

  // openPopupbox(section) {
  //   const content = (
  //     <div>
  //       <img
  //         src={section.src}
  //         width={section.img.sizes["large-width"]}
  //         alt=""
  //       />
  //       <p>
  //         {section.title} - {section.description}
  //       </p>
  //       <p>
  //         <a href={section.author.link}>{section.author.name}</a>
  //       </p>
  //     </div>
  //   );

  //   PopupboxManager.open({ content });
  // }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <Header />
        </header> */}
        {this.state.sections.length === 0 && <Loading />}
        <Section />
        <footer>Bryan Windsor Ⓒ 2019</footer>
        <PopupboxContainer />
      </div>
    );
  }
}
