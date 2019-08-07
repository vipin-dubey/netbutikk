import React, { Component } from "react";
import {
  BreadcrumbSkeleton,
  Breadcrumb,
  BreadcrumbItem
} from "carbon-components-react";

export default class BreadcrumbNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      /* Breadcrumb navigation menu */
      <div className="bx--grid breadcrumb-navigation">
        <div className="bx-row">
          <section className="bx--offset-lg-2 bx--col-lg-14">
            <Breadcrumb>
              <BreadcrumbItem href="#">
                <a href="#">HJEM</a>
              </BreadcrumbItem>
              <BreadcrumbItem href="#">
                <a href="#">HERRE</a>
              </BreadcrumbItem>
              <BreadcrumbItem href="#" aria-current="page">
                <a href="#">SHORTS</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </section>
        </div>
      </div>
    );
  }
}
