import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
  }
  get scaledSections() {
    const nbr = (this.state.sections.length / 3).toString().split(".");
    const sections = [];

    for (let i = 0; i < nbr[0]; i++) {
      sections[i] = [];

      for (let j = 1; j <= 3; j++) {
        sections[i].push(this.state.sections[i * 3 + j - 1]);
      }
    }

    if (nbr[1]) {
      const missing = nbr[1].startsWith("3") ? 1 : 2;

      sections.push([]);

      for (let k = 0; k < missing; k++) {
        sections[sections.length - 1].push(this.state.sections[nbr[0] * 3 + k]);
      }
    }

    return sections;
  }

  async componentDidMount() {
    // error handling is important when fetching data
    try {
      await fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(sections =>
          this.setState((prevState, props) => {
            return { sections: sections.map(this.mapSection) };
          })
        );
    } catch (error) {
      console.log(error);
    }
  }

  mapSection(section) {
    return {
      img: section.acf.image,
      src: section.acf.image.url,
      title: section.title.rendered,
      key: section.title.rendered,
      description: section.content.rendered.replace(/(<([^>]+)>)/gi, ""),
      author: {
        name: section.acf.author_name,
        link: section.acf.author_link
      }
    };
  }
  render() {
    return (
      <div
        className="column"
        key={this.props.index}
        ref={ref => (this.myRef = ref)}
      >
        <h1 className="image-title centered">{this.props.section.title}</h1>
        <img
          className="image"
          id={`img-${this.props.index}`}
          alt=""
          src={this.props.section.src}
          height={this.props.section.img["small-height"]}
        />
      </div>
    );
  }
}

export default Section;
