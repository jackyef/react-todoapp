import React, { Component } from 'react';
import Todo from './components/Todo.js';
import TodoAdd from './components/TodoAdd.js';

var App = React.createClass({
  getInitialState: function(){
    return ({
      todos: ['Git', 'Gud', '???', 'Got gud!']
    });
  },

  addTodo: function(content){
    this.state.todos.push(content);
    var newTodos = this.state.todos;
    this.setState({
      todos: newTodos
    });
  },

  removeTodo: function(index){
    this.state.todos.splice(index, 1);
    var newTodos = this.state.todos;
    this.setState({
      todos: newTodos
    });
  },

  render: function(){
    var todo = this.state.todos.map(function(val, index){
      return <Todo removeTodo={this.removeTodo} key={'todo_'+index} content={val} index={index+1} />;
    }, this);
    return (
      <div>
        <h1>Super Simple React To-do App</h1>
        <TodoAdd addTodo={this.addTodo} />
        {todo}
      </div>
    );
  }
});

module.exports = App;
