/* Import libraries & omponents */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, DataTable } from "carbon-components-react";
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableToolbar,
  TableBatchAction,
  TableBatchActions,
  TableSelectRow,
  TableSelectAll
} = DataTable;

/* Import icons */
import ShoppingCart20 from "@carbon/icons-react/es/shopping--cart/20";
import FavoriteFilled32 from "@carbon/icons-react/es/favorite--filled/32";

/* Import Redux actions */
import { removeFromCart } from "../../../actions";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCartModelOpen: false
    };

    this.openShoppingCartModel = this.openShoppingCartModel.bind(this);
    this.renderShoppingCartBody = this.renderShoppingCartBody.bind(this);
    this.returnCartTotal = this.returnCartTotal.bind(this);
    this.batchRemoveProducts = this.batchRemoveProducts.bind(this);
  }

  /* Show shopping cart modal */
  openShoppingCartModel() {
    this.setState({ shoppingCartModelOpen: true });
  }

  /* Remove one or more products from shopping cart (Redux store only) */
  batchRemoveProducts(products) {
    let count = 0;
    let productsToBeRemoved = [];

    products.forEach(p => {
      let product = this.props.cart.filter(product => product.id === p.id);
      productsToBeRemoved.push(product);
      count++;
    });

    if (count == products.length) {
      this.props.removeFromCart(productsToBeRemoved);
    }
  }

  /* Helper function to calculate total amount of items added to shopping cart */
  returnCartTotal(cart) {
    let total = 0;

    cart.forEach(product => {
      total = total + product.price;
    });
    return total;
  }

  /* Render shooping cart body (Table or Empty page with icon based on cart varibale in Redux store) */
  renderShoppingCartBody(cart) {
    let isShoppingCartEmpty = this.props.cart.length > 0 ? false : true;
    if (isShoppingCartEmpty) {
      return (
        <div className="empty-cart">
          <h4> Your have not added anything to shopping cart yet</h4>
          <FavoriteFilled32 fill="#FB4B53" />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="bx--grid">
            <div className="bx--row">
              <div className="bx--col-sm-16 bx--col-md-16 bx--col-lg-16">
                <DataTable
                  rows={cart}
                  headers={[
                    { key: "name", header: "Product" },
                    { key: "price", header: "Price" },
                    { key: "quantity", header: "Quantity" }
                  ]}
                  render={({
                    rows,
                    headers,
                    getHeaderProps,
                    getBatchActionProps,
                    getSelectionProps,
                    selectedRows,
                    selectRow
                  }) => (
                    <TableContainer>
                      <TableToolbar>
                        {/* make sure to apply getBatchActionProps so that the bar renders */}
                        <TableBatchActions {...getBatchActionProps()}>
                          {/* inside of you batch actions, you can include selectedRows */}
                          <TableBatchAction
                            onClick={() => {
                              this.batchRemoveProducts(selectedRows);
                            }}
                            icon={null}
                          >
                            Remove Items
                          </TableBatchAction>
                        </TableBatchActions>
                      </TableToolbar>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableSelectAll {...getSelectionProps()} />
                            {headers.map(header => (
                              <TableHeader {...getHeaderProps({ header })}>
                                {header.header}
                              </TableHeader>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map(row => (
                            <TableRow
                              key={row.id}
                              onClick={() => selectRow(row.id)}
                            >
                              <TableSelectRow {...getSelectionProps({ row })} />
                              {row.cells.map(cell => (
                                <TableCell key={cell.id}>
                                  {cell.value}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                />
                <div className="cart-total">
                  <span className="text">Total</span>
                  <span className="amount">{this.returnCartTotal(cart)}</span>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <ShoppingCart20
          role="button"
          description="Information"
          style={{
            height: "20px",
            width: "20px",
            fill: "#ffbf00",
            display: "inline-block"
          }}
          onClick={() => this.openShoppingCartModel()}
        />
        <span className="items-count">{this.props.cart.length}</span>

        <Modal
          className="shopping-cart-modal"
          open={this.state.shoppingCartModelOpen}
          modalHeading="Shopping Cart"
          shouldSubmitOnEnter={true}
          primaryButtonText="Checkout"
          shouldSubmitOnEnter={true}
          secondaryButtonText="Cancel"
          onRequestSubmit={() => this.handleModalSubmit()}
          onRequestClose={() => this.setState({ shoppingCartModelOpen: false })}
          passiveModal={false}
        >
          {this.renderShoppingCartBody(this.props.cart)}
        </Modal>
      </React.Fragment>
    );
  }
}

/* Map Redux state variables and actions to props before exporting component */
const mapStateToProps = state => ({
  cart: state.cart
});

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: products => dispatch(removeFromCart(products))
  };
}

/* Export shopping cart component with Redux props and dispatch actions */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
