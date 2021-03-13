import { render } from "@testing-library/react";
import React from "react";

// const Images = (props) =>
class Images extends React.Component {
  onSearch = () => {
    return this.props.images.map(({ description, id, urls }) => {
      return <img alt={description} key={id} src={urls.regular} />;
    });
  };

  render() {
    //   console.log(props.images);
    //   const value = props.images.map(({ description, id, urls }) => {
    //     return <img alt={description} key={id} src={urls.regular} />;
    //   });

    return <div>{this.onSearch()}</div>;
  }
}

export default Images;
