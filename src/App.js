import React from "react";
import "./styles.css";

function PricingContainer(props) {
  return (
    <div className={props.obj.popular ? "pricing highlight" : "pricing"}>
      <h4>{props.obj.name}</h4>
      {props.obj.popular ? (
        <small className="green">{props.obj.popular}</small>
      ) : null}
      <h1>{props.obj.price}</h1>
      <small>{props.obj.title}</small>
      <ul>
        <li>{props.obj.invoice}</li>
        <li>{props.obj.script}</li>
        <li>{props.obj.payment}</li>
      </ul>
      <button>Start Free Trial</button>
    </div>
  );
}

export default function App() {
  let data = [
    {
      name: "Sole Proprietor",
      price: "$19.99",
      title: "per month",
      invoice: "100 invoices",
      script: "Custom scripting & scheduling",
      payment: "Payment & accounting software integration"
    },
    {
      name: "Small Business",
      popular: "Most Popular",
      price: "$49.99",
      title: "per month",
      invoice: "300 invoices",
      script: "Custom scripting & scheduling",
      payment: "Payment & accounting software integration"
    },
    {
      name: "Enterprise",
      price: "$99.99",
      title: "per month",
      invoice: "500 invoices",
      script: "Custom scripting & scheduling",
      payment: "Payment & accounting software integration"
    }
  ];

  return (
    <div className="App">
      <h1>Pricing</h1>
      <div className="pricing-container">
        {data.map((obj) => (
          <PricingContainer key={obj.name} obj={obj} />
        ))}
      </div>
    </div>
  );
}
