import "./index.css";
import { useState } from "react";

export default function App({ Title, cardImg, Price }) {
const [quantity, setQuantity] = useState(0);

  // using array function

  // const inc = () => {
  //   setQuantity(quantity + 1);
  // }
  // const dec = () => {
  //   setQuantity(quantity - 1);
  // }

  // using function

  // function inc() {
  //   if (quantity === 5) {
  //     return alert("Maximum quantity can be Five");
  //   } else {
  //     return setQuantity(quantity + 1);
  //   }
  // }

  //  code optimized using ternary operator
  function inc() {
    quantity === 5
      ? alert("Maximum quantity can be Five")
      : setQuantity(quantity + 1);
  } 

  // function dec() {
  //   if (quantity === 0) {
  //     return alert("Minimum quantity can be One");
  //   } else {
  //     setQuantity(quantity - 1);
  //   }
  // }

  //  code optimized using ternary operator

  function dec() {
    quantity === 0
      ? alert("Minimum quantity can be One")
      : setQuantity(quantity - 1);
  }

  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={cardImg} alt="" className="card-img" />
        </div>
        <div className="title-container">
          <h2>{Title}</h2>
          <div className="line-container">
            <hr />
          </div>
        </div>
        <div className="desc-container">
          <p>{Price}</p>
        </div>
        <div className="q-container">
          <h2>{quantity}</h2>
        </div>
        <div className="button-container">
          <button className="button" onClick={dec}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <button className="button" onClick={inc}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="add-to-card-container">
          <button className="add-to-card">Add to Card</button>
        </div>
      </div>
    </>
  );
}
