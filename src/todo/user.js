const Todo = require('./todo');

function User() {
  this.todoList = new Todo();
}

module.exports = User;
