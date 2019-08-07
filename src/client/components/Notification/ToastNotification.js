/* Manages ToastNotification in the Application, this is really nice when you need it, 
   works beautifully on desktop, needs some styling tweaks for mobile 
   Default timeout : 2 seconds (set from redux action)
*/

import React from "react";
import { connect } from "react-redux";
import { ToastNotification } from "carbon-components-react";
import { hideToastNotification } from "../../actions";

class NotificationManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderToastNotification() {
    return (
      <ToastNotification
        kind={this.props.toastNotification.kind}
        title={this.props.toastNotification.title}
        subtitle={this.props.toastNotification.subtitle}
        iconDescription=""
        caption={this.props.toastNotification.caption || ""}
        timeout={this.props.toastNotification.timeout || 0}
        hideCloseButton={false}
        onCloseButtonClick={() => {
          this.props.hideToastNotification();
        }}
        style={
          this.props.toastNotification.style || {
            width: "auto",
            marginTop: "3.5rem",
            marginRight: "3.5rem",
            position: "fixed",
            right: "0px",
            top: "0px",
            zIndex: 10000
          }
        }
      />
    );
  }

  render() {
    if (this.props.toastNotification.kind) {
      console.log("renderToastNotification called");
      return this.renderToastNotification();
    }
    return null;
  }
}

/* Map Redux state variables and actions to props before exporting component */
const mapStateToProps = state => ({
  toastNotification: state.toastNotification
});

const mapDispatchToProps = dispatch => ({
  hideToastNotification: message => dispatch(hideToastNotification(message))
});

/* Export shopping cart component with Redux props and dispatch actions */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationManager);
