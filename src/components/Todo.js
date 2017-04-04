import React from 'react';

var Todo = React.createClass({
  handleRemove: function(e){
    this.props.removeTodo(this.props.index-1);
  },

  render: function(){
    return (
      <div>
          <h4>#{this.props.index}{' - '}{this.props.content}</h4>
          <a href="#" onClick={this.handleRemove}>DONE!</a>
      </div>
    );
  }
});

module.exports = Todo;
