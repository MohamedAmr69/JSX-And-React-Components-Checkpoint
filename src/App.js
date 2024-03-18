import React from "react";
import myPhoto from "././images/myPhoto.jpg";
import ColorSchemesExample from "./NavBar";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./Product";
import "./style.css";

const App = () => {
  const firstName = "Mohamed";
  return (
    <>
      <ColorSchemesExample />

      <body>
        <div className="container">
          <p>Hello, {firstName ? firstName : "there"}!</p>
          {firstName && <img src={myPhoto} className="myPhoto" alt="myPhoto" />}

          <div class="grid-3-cols">
            <figure class="chair">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Image image={product.image} />
                  <Name name={product.name} />
                  <Price price={product.price} />
                  <Description description={product.description} />
                </Card.Body>
              </Card>
            </figure>
            <figure class="chair">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Image image={product.image} />
                  <Name name={product.name} />
                  <Price price={product.price} />
                  <Description description={product.description} />
                </Card.Body>
              </Card>
            </figure>
            <figure class="chair">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Image image={product.image} />
                  <Name name={product.name} />
                  <Price price={product.price} />
                  <Description description={product.description} />
                </Card.Body>
              </Card>
            </figure>
          </div>
        </div>
      </body>
    </>
  );
};
export default App;
