import React, { Component } from "react";
import PropTypes from "prop-types";

class AnimalProductItem extends Component {
  getFavoriStyle = () => {
    return {
      color: this.props.product.statusFavori ? "rgb(97, 93, 93)" : "crimson",
    };
  };
  render() {
    //Deconstructing
    const {
      productImage,
      productTitle,
      productDescription,
      productPrice,
      productCategory,
      id,
    } = this.props.product;

    return (
      <div className="list">
        <div className="product-item">
          <div className="product-photo">
            <img src={productImage} alt="animal product" />
          </div>
          <div className="product-description">
            <h1 className="product-title">{productTitle}</h1>
            <p className="product-desc">{productDescription}</p>
            <span className="product-price">{productPrice}</span>
            <span className="product-category">{productCategory}</span>
            <span
              style={this.getFavoriStyle()}
              onClick={this.props.markStatusFavori.bind(this, id)}
            >
              <i className="fas fa-star favori-btn"></i>
            </span>
            <span onClick={this.props.markStatusPanier.bind(this, id)}>
              <i className="fas fa-shopping-basket panier-btn"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

//PropTypes
AnimalProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default AnimalProductItem;
