import React, { Component } from "react";

class PanierItem extends Component {
  render() {
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
            <img src={productImage} alt="" />
          </div>
          <div className="product-description">
            <h1 className="product-title">{productTitle}</h1>
            <p className="product-desc">{productDescription}</p>
            <span className="product-price">{productPrice}</span>
            <span className="product-category">{productCategory}</span>
            <span onClick={this.props.delProductPanier.bind(this, id)}>
              <i className="fas fa-trash trash-btn"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PanierItem;
