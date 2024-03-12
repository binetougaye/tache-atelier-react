import React, { Component } from "react";

class Categories extends Component {
  render() {
    return (
      <div className="text-center">
        <select >
          <option className="p-3">fleurs</option>
        </select>
        <button className="btn-reset p-1">Réinitialiser</button>
      </div>
    );
  }
}
export default Categories;
