import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Images from "./Images";
class App extends React.Component {
  state = { image: [], newTerm: "" };
  onSubmitForm = (term) => {
    console.log(term);
    this.setState({ newTerm: term });
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID O_w8Q7s6lm0DDNXa-iDtmPu02KKsQnWneJaGuW2R3Do",
        },
      })
      .then((response) => {
        this.setState({ image: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        Found: {this.state.image.length}
        images Search for : {this.state.newTerm}
        <Images images={this.state.image} />
      </div>
    );
  }
}

export default App;
