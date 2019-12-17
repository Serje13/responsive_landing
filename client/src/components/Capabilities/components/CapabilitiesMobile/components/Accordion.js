import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import {capabilities_items} from "./constants";

export const AccordionComponent = () => {
    return (
        <div className="my-accordion-wraper">
            <Accordion allowZeroExpanded={true} className="my-accordion">
                {capabilities_items.map((item, i) => (
                    <AccordionItem key={i} className="my-acc-item">
                        <AccordionItemHeading >
                            <AccordionItemButton className="my-class-button">
                                {item.title}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="acc-panel" >
                            <p>
                                {item.content}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};