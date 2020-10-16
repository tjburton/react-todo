import React, {Component} from 'react';
import './App.css';
import ListItem from "./ListItem/ListItem";

class App extends Component {
  state = {
    toDo: [
      {id: 1, text: 'This is an example list item, please type to start adding an item', completed: false, duedate: '11/16/20 00:00'},
      {id: 2, text: 'This is a completed item', completed: true, duedate: '09/14/20 00:00'},
      {id: 3, text: 'This is an overdue item', completed: false, duedate: '09/14/20 00:00'},
      {id: 4, text: 'Testing..', completed: false, duedate: '05/10/2020 00:00'}
    ]
  }

  addToDoHandler = (event) => {
    this.setState({
      toDo: [
        {
          id: 1,
          text: event.target.value,
          completed: false,
          duedate: '11/16/20 00:00'
        },
        {id: 2, text: 'This is a completed item', completed: true, duedate: '09/14/20 00:00'},
        {id: 3, text: 'This is an overdue item', completed: false, duedate: '09/14/20 00:00'},
        {id: 4, text: 'This is an example list item, please type to start adding an item', completed: false, duedate: '05/10/2020 00:00'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To do:</h2>
          <ol>
            <ListItem
              text={this.state.toDo[0].text}
              completed={this.state.toDo[0].completed}
              dueDate={this.state.toDo[0].duedate} />
            <ListItem
              text={this.state.toDo[1].text}
              completed={this.state.toDo[1].completed}
              dueDate={this.state.toDo[1].duedate} />
            <ListItem
              text={this.state.toDo[2].text}
              completed={this.state.toDo[2].completed}
              dueDate={this.state.toDo[2].duedate} />
          </ol>
          <label for='todoinput'></label>
          <input name='todoinput' id='todoinput' name='todoinput' type='text' onChange={this.addToDoHandler}/>
          <input type="submit" value="Add To Do"/>
        </div>
      </div>
    )
  }
}

export default App;
