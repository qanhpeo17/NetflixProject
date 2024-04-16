import React from "react";
import FAQItem from "./FAQItem"; // Import FAQItem component
import "../noidung5/noidung5.css";
function Noidung5({ faqs }) {
  return (
    <div className="cC5Container">
      <div className="cC5Wrapper">
        <h1 className="textTitle">Frequently Asked Questions</h1>
        {/* Duyệt qua mảng faqs và render mỗi mục dưới dạng FAQItem */}
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default Noidung5;
