const chai = require('chai');
const expect = chai.expect;

const { User, Todo } = require('./../src/todo');

describe('User', function() {
  it('todoList must exist', function() {
    const user = new User();
    expect(user.todoList).to.exist;
    expect(user.todoList).to.be.an.instanceOf(Todo);
  });
});
