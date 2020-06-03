import React, { Component } from "react";
import PanierItem from "./PanierItem";

class Panier extends Component {
  render() {
    return this.props.animalProducts
      .filter((product) => product.statusPanier)
      .map((product) => (
        <PanierItem
          key={product.id}
          product={product}
          delProductPanier={this.props.delProductPanier}
        />
      ));
  }
}

export default Panier;
