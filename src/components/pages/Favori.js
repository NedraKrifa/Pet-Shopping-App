import React, { Component } from "react";
import FavoriItem from "./FavoriItem";

class Favori extends Component {
  render() {
    return this.props.animalProducts
      .filter((product) => product.statusFavori)
      .map((product) => <FavoriItem key={product.id} product={product} markStatusFavori={this.props.markStatusFavori} />);
  }
}

export default Favori;
