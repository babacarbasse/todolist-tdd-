const chai = require('chai');
const expect = chai.expect;

const { Task } = require('./../src/todo');

describe('Task', function() {
  it('title must exist', function() {
    const task = new Task();
    expect(task.title).to.exist;
  });
  it('description must exist', function() {
    const task = new Task();
    expect(task.description).to.exist;
  });
  it('startAt must exist', function() {
    const task = new Task();
    expect(task.startAt).to.exist;
  });
  it('endAt must exist', function() {
    const task = new Task();
    expect(task.endAt).to.exist;
  });
});
