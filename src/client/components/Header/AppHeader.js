/* Import libraries */
import React, { Component } from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";
import { Modal } from "carbon-components-react";

/* Import icons */
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import Search20 from "@carbon/icons-react/lib/search/20";

/* Import application components */
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import BreadcrumbNavigation from "./BreadcrumbNavigation/BreadcrumNavigation";
import DrawerNavigation from "./DrawerNavigation/DrawerNavigation";

/* Helper constant to provide popular searches - should come from an API call in a real application */
const popularSearches = (
  <div>
    <span className="bx--tag bx--tag--red">Shorts</span>
    <span className="bx--tag bx--tag--magenta">Jeans</span>
    <span className="bx--tag bx--tag--purple">Sko</span>
    <span className="bx--tag bx--tag--blue">Møbler</span>
    <span className="bx--tag bx--tag--cyan">Kampanjer</span>
    <span className="bx--tag bx--tag--teal">Hoodies</span>
    <span className="bx--tag bx--tag--green">Bukser</span>
    <span className="bx--tag bx--tag--gray">Basics</span>
    <span className="bx--tag bx--tag--cool-gray">Gavekort</span>
    <span className="bx--tag bx--tag--warm-gray">Summer</span>
  </div>
);

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchModalOpen: false,
      isDrawerNavigationOpen: false
    };
    this.openSearchModal = this.openSearchModal.bind(this);
    this.toggleDrawerNavigation = this.toggleDrawerNavigation.bind(this);
  }

  /* Controls opening of Search Box modal */
  openSearchModal() {
    this.setState({
      searchModalOpen: true
    });
  }

  /* Controls opening and closing of Drawer Navigation */
  toggleDrawerNavigation() {
    this.setState(prevState => ({
      isDrawerNavigationOpen: !prevState.isDrawerNavigationOpen
    }));
  }

  /* Controls css class name to be applied to Drawer Navigation based on state variable set using  toggleDrawerNavigation function*/
  getDrawerNavigationClassNames() {
    return this.state.isDrawerNavigationOpen ? "" : "hidden";
  }

  render() {
    return (
      <div className="container">
        {/* Bring in or close drawer navigation if user is on mobile and clicks on app-drawer icon */}
        <div className={this.getDrawerNavigationClassNames()}>
          <DrawerNavigation />
        </div>

        {/* Modal for Jumbo Search Box */}
        <Modal
          className="search-modal"
          open={this.state.searchModalOpen}
          modalHeading={popularSearches}
          shouldSubmitOnEnter={true}
          onRequestSubmit={() => this.handleModalSubmit()}
          onRequestClose={() => this.setState({ searchModalOpen: false })}
          passiveModal={true}
        >
          <Search />
        </Modal>

        {/* Start -  Application Header */}
        <Header aria-label="IBM Platform Name">
          {/* Application logo */}
          <HeaderName href="#" prefix="Netbuttik">
            &reg;
          </HeaderName>

          {/* Application top navigation */}
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem href="#">DAME</HeaderMenuItem>
            <HeaderMenu
              aria-label="Link 4"
              className="active"
              menuLinkName="HERRE"
            >
              <HeaderMenuItem href="#">SHORTS</HeaderMenuItem>
              <HeaderMenuItem href="#">BOKSER</HeaderMenuItem>
              <HeaderMenuItem href="#">SKO</HeaderMenuItem>
            </HeaderMenu>
            <HeaderMenuItem href="#">DIVIDED</HeaderMenuItem>
            <HeaderMenuItem href="#">BARN</HeaderMenuItem>
            <HeaderMenuItem href="#">SALG</HeaderMenuItem>
            <HeaderMenuItem href="#">BÆREKRAFT</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="HJEM">
              <HeaderMenuItem href="#">Soverom</HeaderMenuItem>
              <HeaderMenuItem href="#">Stue</HeaderMenuItem>
              <HeaderMenuItem href="#">Barnerom</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>

          {/* Header action icons - Search, Cart, Notification, AppDrawer */}
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Search"
              onClick={() => {
                this.openSearchModal();
              }}
            >
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Cart">
              <Cart />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              className="app-switcher"
              aria-label="App Switcher"
              onClick={() => {
                this.toggleDrawerNavigation();
              }}
            >
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        {/* END -  Application Header */}

        <BreadcrumbNavigation />
      </div>
    );
  }
}
