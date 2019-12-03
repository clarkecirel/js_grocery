import React from "react";

const Groceries = ({ id, name, complete, groceriesClick }) => (
  <li style={complete ? {...styles.groceries, ...styles.complete } : styles.groceries } onClick= { () => groceriesClick(id) }>
    { name }
  </li>
);

const styles = {
  groceries: { cursor: "pointer" },
  complete: { color: "grey", textDecoration: "line-through" },
};

export default Groceries;