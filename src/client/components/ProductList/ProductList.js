/* ProductList component is the main component, The products are retrieved from Netbuttik API running locally */

/* Import libraries and components */
import React, { Component } from "react";
import { connect } from "react-redux";

/* Import icons*/
import ShoppingCatalog24 from "@carbon/icons-react/es/shopping--catalog/24";

/* Import redux actions */
import {
  addToCart,
  showToastNotification,
  hideToastNotification
} from "../../actions";

/* Define API URL's */
const ProductsAPI = "http://localhost:8080/api/products";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      lastAddedOrRemovedProduct: null,
      isLoading: false
    };

    this.renderProductList = this.renderProductList.bind(this);
    this.loadProductPage = this.loadProductPage.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  loadProductPage() {}

  addProductToCart(product) {
    this.props.hideToastNotification();
    this.setState({
      lastAddedOrRemovedProduct: product
    });
    setTimeout(() => {
      this.props.addToCart(product);
    }, 500);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(ProductsAPI)
      .then(response => response.json())
      .then(data =>
        this.setState({ products: data.products, isLoading: false })
      );
  }

  componentDidUpdate(prevProps) {
    if (this.lastAddedOrRemovedProduct !== null) {
      if (this.props.cart.length !== prevProps.cart.length) {
        let product = this.state.lastAddedOrRemovedProduct;
        if (this.props.cart.length > prevProps.cart.length) {
          product.operation = "ADD";
          this.props.showToastNotification(product);
        } else {
          product.operation = "REMOVE";
          this.props.showToastNotification(product);
        }
      }
    }
  }

  renderProduct(product) {
    return (
      <div className="bx--col-sm-8 bx--col-md-4 bx--col-lg-4 product">
        <div
          className="product-image bx--tile"
          onClick={this.loadProductPage()}
        />
        <div className="bx--grid product-detail">
          <div className="bx--row">
            <div className="bx--col-lg-12">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price / 100} Kr</p>
            </div>
            <div
              className="bx--col-lg-4 product-action"
              onClick={() => this.addProductToCart(product)}
            >
              <ShoppingCatalog24 fill="#408BFC" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Renders product list or an empty screen with loading text based on isLoading flag */
  renderProductList(products, isLoading) {
    if (isLoading) {
      return "Loading ...";
    } else {
      return products.map(product => this.renderProduct(product));
    }
  }

  /* SIDE NAVIGATION and PRODUCT LIST */
  render() {
    const { products, isLoading } = this.state;
    return (
      <div className="bx--grid content-wrapper">
        <div className="bx--row">
          {/* Render side navigation area, hidden on mobile layout */}
          <div className="side-navigation bx--col-sm-16 bx--col-md-4 bx--col-lg-2">
            <h4>NYHETER</h4>
            <ul className="bx--list--unordered">
              <li className="bx--list__item">
                <a href="#">Link 1</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 2</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 3</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 4</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 5</a>{" "}
              </li>
            </ul>

            <br />

            <h4>KAMPANJER</h4>
            <ul className="bx--list--unordered">
              <li className="bx--list__item">
                <a href="#">Link 1</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 2</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 3</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 4</a>{" "}
              </li>
              <li className="bx--list__item">
                <a href="#">Link 5</a>{" "}
              </li>
            </ul>

            <br />

            <h4>GAVEKORT</h4>
            <ul className="bx--list--unordered">
              <li className="bx--list__item">
                <a href="#">Link 1</a>{" "}
              </li>
            </ul>
          </div>

          {/* Render main content area, includes page header and product list */}
          <div className="bx--col-sm-16 bx--col-md-12 bx--col-lg-14 main-conten-area">
            <div className="product-list">
              <div className="bx--grid">
                <div className="bx-row">
                  <section>
                    <h2 className="page-title">SHORTS</h2>
                    <br />
                    <p className="page-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed nisi tellus, eleifend eget risus porttitor, egestas
                      suscipit est. Sed efficitur condimentum diam vitae
                      lacinia. Aenean a finibus elit, id convallis dolor.
                    </p>
                  </section>
                </div>
              </div>

              {/* Render product list */}
              <section className="bx--grid product-section">
                <div className="bx--row">
                  {this.renderProductList(products, isLoading)}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* Map Redux state variables and actions to props before exporting component */
const mapStateToProps = state => ({
  cart: state.cart
});

function mapDispatchToProps(dispatch) {
  return {
    addToCart: product => dispatch(addToCart(product)),
    showToastNotification: data => dispatch(showToastNotification(data)),
    hideToastNotification: () => dispatch(hideToastNotification())
  };
}
/* Export shopping cart component with Redux props and dispatch actions */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
