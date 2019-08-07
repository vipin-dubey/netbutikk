/* A simple DrawerNavigation menu component */
import React, { Component } from "react";
import { Accordion, AccordionItem } from "carbon-components-react";

export default class DrawerNavigation extends Component {
  render() {
    return (
      <div className="drawer-navigation">
        <nav id="drawer">
          <Accordion>
            <AccordionItem title="DAME">
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem title="HERRE">
              <ul>
                <li>
                  <a href="#" className="active">
                    SHORTS
                  </a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem title="DIVIDED">
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem title="BARN">
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem title="SALG">
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem title="BÆREKRAFT">
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem title="HJEM">
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 1</a>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </nav>
      </div>
    );
  }
}
