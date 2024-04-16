import React, { useState } from "react";
import "../noidung5/FAQItem.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="question"
        >
          {question}
        </AccordionSummary>
        <AccordionDetails className="answer">{answer}</AccordionDetails>
      </Accordion>
      {/* <div className="question" onClick={toggleAnswer}>
        {question}
        <span className={`icon ${isOpen ? "open" : "closed"}`}></span>
      </div>
      {isOpen && (
        <div className="answer" onClick={toggleAnswer}>
          {answer}
        </div> */}
    </div>
  );
}

export default FAQItem;
