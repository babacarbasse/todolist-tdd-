const chai = require('chai');
const expect = chai.expect;

const { Task } = require('./../src/todo');

describe('Task', function() {
  it('title must exist and not empty', function() {
    const task = new Task();
    expect(task.title).to.exist;
    expect(task.title).to.not.empty;
  });
  it('description must exist and not empty', function() {
    const task = new Task();
    expect(task.description).to.exist;
    expect(task.description).to.not.empty;
  });
  it('startAt must exist and not empty', function() {
    const task = new Task();
    expect(task.startAt).to.exist;
    expect(task.startAt).to.not.empty;
  });
  it('endAt must exist and not empty', function() {
    const task = new Task();
    expect(task.endAt).to.exist;
    expect(task.endAt).to.not.empty;
  });
});
