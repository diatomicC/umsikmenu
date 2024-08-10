import React from "react";
import Menu from "./component/Menu";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import OrderArea from "./component/OrderArea";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  return (
    <div className="HomePage" >
      <Banner />
      <CategorySlider setSelectedCategory={setSelectedCategory}/>
      <p>{selectedCategory}</p>
      <Menu />
      <OrderArea />
    </div>
  );
}

export default HomePage;
