import "./styles.css";
import React from "react";

import { CardComponent, SwitchTabs } from "./components/index";

export default function App() {
  return (
    <div className="App">
      {/* <CardComponent
        image="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPEYEBOGLER-COSEVE88413F32E363/1601890054864_0..jpg"
        title={"HERE&NOW"}
        desc="Men Black Printed Round Neck T-shirt"
        price="411"
        org_price="749"
        discount="45"
      /> */}
      <SwitchTabs />
    </div>
  );
}
