const chai = require('chai');
const expect = chai.expect;

const { Todo, Task } = require('./../src/todo');

describe('Todo', function() {
  it('tasks must exist and to be an array', function() {
    const todo = new Todo();
    expect(todo.tasks).to.exist;
    expect(todo.tasks).to.be.an.instanceOf(Array);
  });
});
