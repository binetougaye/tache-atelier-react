import React, { Component } from "react";

class Cart extends Component {
  render() {
    let olivier = 35;
    let tulipe = 5;
    return (
      <div className="panier text-white p-3">
        <p className="text-end">Panier</p>
        <h4>Panier</h4>
        <ul>
          <li>1 olivier {olivier}€</li>
          <li>1 tulipe {tulipe} €</li>
        </ul>
        Total: {olivier + tulipe}€
        <div>
          <button>Voir le panier</button>
        </div>
      </div>
    );
  }
}
export default Cart;
