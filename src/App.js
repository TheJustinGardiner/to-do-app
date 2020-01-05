import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {
    listItems: [
      {task: 'Go grocery shopping'},
      {task: 'Get a haircut'},
      {task: 'Run 3 miles'},
      {task: 'Work on React projects'}
    ],
    checked: false,
    value: ""
  }


  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  }

  checkHandler = (listItemIndex) => {
    const listItemsTemp = [...this.state.listItems];
    listItemsTemp.splice(listItemIndex,1);
    this.setState({listItems: listItemsTemp})
  }

  inputHandler = (event) => {
    if(event) event.preventDefault();
    const listItemsTemp = [...this.state.listItems];
    console.log(event.target.value);
    const newTask = this.input.value;
    const taskObj = {
      task: newTask
    }
    listItemsTemp.push(taskObj);
    console.log(listItemsTemp);
    this.setState({listItems: listItemsTemp})
  }

  onInputChange = ({ target }) => {
    const listItemsTemp = [...this.state.listItems,target.value];
    this.setState({listItems: listItemsTemp})
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        {this.state.listItems.map((listItem,index) => {
          return <UserOutput 
            task={listItem.task}
            check={() => this.checkHandler(index)}
            key={index}/>
        })}
        <form onSubmit={this.inputHandler}>
          <input type="text" maxlength="64" ref={(element) => { this.input = element }}></input>
          
        </form>
      </div>
    );
  }
}

export default App;
