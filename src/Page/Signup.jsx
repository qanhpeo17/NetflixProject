import React from "react";
import Header from "../Components/Header/Header";
import Noidung1 from "../Components/noidung1/noidung1"; // Note: PascalCase
import Footer from "../Components/Footer/Footer";
import Noidung2 from "../Components/noidung2/noidung2";
import Noidung3 from "../Components/noidung3/noidung3";
import Noidung4 from "../Components/noidung4/noidung4";
import Noidung5 from "../Components/noidung5/noidung5";
import faqs from "../Components/noidung5/faqs";

function Signup() {
  return (
    <div>
      <Header />
      <Noidung1 />
      <Noidung2 />
      <Noidung3 />
      <Noidung4 />
      <Noidung5 faqs={faqs} />
      <Footer />
    </div>
  );
}

export default Signup;
