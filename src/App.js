import React, {Component} from 'react';
import List from './List';
import GroceriesForm from "./GroceriesForm";


class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Milk", complete: false},
      { id: 2, name: "Eggs", complete: false},
      { id: 3, name: "Cheese", complete: false},
    ]
  };

  addItem = (name) => {
    const groceries = { 
      id: this.state.groceries[this.state.groceries.length - 1].id + 1,
      name, 
      complete: false };
      this.setState( { groceries: [ ...this.state.groceries, groceries] });
  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map ( groceries => {
        if (groceries.id === id ) {
          return {
            ...groceries,
            complete: !groceries.complete
          };
        };
        return groceries
      })
    });
  };

  render() {
    const { groceries } = this.state;
    return(
      <div>
      <GroceriesForm addItem={ this.addItem } />  
      <List name="Grocery List" items={ groceries } groceriesClick= { this.handleClick }/>
      </div>
    );
  };
};

export default App;
