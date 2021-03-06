import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ 
        selectedDish: dishId 
    });
   //Aqui el dishId es el id del dish clickeado
  }

  


  render() {
    return (
      <div>
        <Header />
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
      
      <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
    </div>
    );
  };
}

export default Main;
