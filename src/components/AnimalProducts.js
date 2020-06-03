import React, { Component } from "react";
import AnimalProductItem from "./AnimalProductItem"
import PropTypes from 'prop-types'

class AnimalProducts extends Component {
  render() {
    return this.props.animalProducts.map((product) => (
      <AnimalProductItem key={product.id} product={product} markStatusPanier={this.props.markStatusPanier} markStatusFavori={this.props.markStatusFavori} />
    ));
  }
}

//PropTypes
AnimalProducts.propTypes = {
  animalProducts : PropTypes.array.isRequired
}

export default AnimalProducts;
