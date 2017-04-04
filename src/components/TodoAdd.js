import React from 'react';

var TodoAdd = React.createClass({
  handleAdd: function(e){
    const ENTER_KEY = 13;
    if(e.which == ENTER_KEY){
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  },

  render: function(){
    return (
      <div>
        <input type="text" onKeyUp={this.handleAdd} />
      </div>
    );
  }
});

module.exports = TodoAdd;
