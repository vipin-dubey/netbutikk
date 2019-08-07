/* A wrapper component, returns carbon component searchbox with some addition, could be used later to extend on search opearions */
import React, { Component } from "react";
import { Search } from "carbon-components-react";

export default class SearchBox extends Component {
  render() {
    return (
      <Search
        className="product-search"
        labelText="Type here to start your search.."
        placeHolderText="Search Netbuttik"
      />
    );
  }
}
