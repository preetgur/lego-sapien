"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <section className="faq-area ptb-80 bg-mainBlack">
      <div className="container">
        <div className="section-title">
          <h2>
            Frequently Asked <span>Question</span>
          </h2>
          <p>
            With regards to Lego Sapien,we have generalised few basic queries
            and tried to answer them,Incase of any further details,kindly
            contact us as per the information provided under relevant section.
          </p>
        </div>

        <div className="flex space-x-10">
          <div className="flex-1">
            <div
              className="accordion"
              id="accordionEx"
              role="tablist"
              aria-multiselectable="true"
            >
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can we use this product for Non IT Domains?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>No-currently this will work for IT domain mainly.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can we understand how the product works or any demo?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes,surely-Please feel free to drop an email to
                      &quot;support@legosapien.com&quot;.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can we understand the pricing of the product?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes-Please email &quot;support@legosapien.com&quot; for
                      the commercials.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      If I am an IT company,can I get to use this product
                      immediately once commercials are through?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes-once commercials are through-you can immediately
                      access this through a link like any other application.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="relative flex-1 ">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
