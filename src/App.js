import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Slides from "./components/layout/Slides";
import Bird from "./components/pages/Bird";
import Cat from "./components/pages/Cat";
import Dog from "./components/pages/Dog";
import SmallPet from "./components/pages/SmallPet";
import Panier from "./components/pages/Panier";
import Favori from "./components/pages/Favori";
import { animalsProducts } from "./data/data";
import AnimalProducts from "./components/AnimalProducts";

class App extends Component {
  state = {
    animalProducts: animalsProducts,
  };

  markStatusPanier = (id) => {
    this.setState({
      animalProducts: this.state.animalProducts.map((product) => {
        if (product.id === id) {
          product.statusPanier = true;
        }
        return product;
      }),
    });
  };
  delProductPanier = (id) => {
    this.setState({
      animalProducts: this.state.animalProducts.map((product) => {
        if (product.id === id) {
          product.statusPanier = false;
        }
        return product;
      }),
    });
  };

  markStatusFavori = (id) => {
    this.setState({
      animalProducts: this.state.animalProducts.map((product) => {
        if (product.id === id) {
          product.statusFavori = !product.statusFavori;
        }
        return product;
      }),
    });
  };
  getValue = (item) => {
    return parseFloat(item.replace('£', ''))
  }
  render() {
    const total = () => this.state.animalProducts.filter((product) => product.statusPanier).reduce((acc, item) => acc + this.getValue(item.productPrice),0).toFixed(2)

    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Slides />
                <AnimalProducts
                  animalProducts={this.state.animalProducts}
                  markStatusPanier={this.markStatusPanier}
                  markStatusFavori={this.markStatusFavori}
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/cat"
            render={(props) => (
              <Cat
                animalProducts={this.state.animalProducts}
                markStatusPanier={this.markStatusPanier}
                markStatusFavori={this.markStatusFavori}
              />
            )}
          />
          <Route
            path="/dog"
            render={(props) => (
              <Dog
                animalProducts={this.state.animalProducts}
                markStatusPanier={this.markStatusPanier}
                markStatusFavori={this.markStatusFavori}
              />
            )}
          />
          <Route
            path="/bird"
            render={(props) => (
              <Bird
                animalProducts={this.state.animalProducts}
                markStatusPanier={this.markStatusPanier}
                markStatusFavori={this.markStatusFavori}
              />
            )}
          />
          <Route
            path="/smallPet"
            render={(props) => (
              <SmallPet
                animalProducts={this.state.animalProducts}
                markStatusPanier={this.markStatusPanier}
                markStatusFavori={this.markStatusFavori}
              />
            )}
          />
          <Route
            path="/favori"
            render={(props) => (
              <Favori
                animalProducts={this.state.animalProducts}
                markStatusFavori={this.markStatusFavori}
              />
            )}
          />
          <Route
            path="/panier"
            render={(props) => (
              <React.Fragment>
                <Panier
                  animalProducts={this.state.animalProducts}
                  delProductPanier={this.delProductPanier}
                />
                <div className="total">
                  <span>TOTAL:</span>
                  <span>{'£'} {total()}</span>
                </div>
              </React.Fragment>
            )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
