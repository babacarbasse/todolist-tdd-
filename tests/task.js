const chai = require('chai');
const expect = chai.expect;

const { Task } = require('./../src/todo');

describe('Task', function() {
  it('title must exist and not empty', function() {
    const task = new Task('this a test', null, null, null);
    expect(task.title).to.exist;
    expect(task.title).to.not.empty;
  });
  it('description must exist and not empty', function() {
    const task = new Task(null, 'this is a test', null, null);
    expect(task.description).to.exist;
    expect(task.description).to.not.empty;
  });
  it('startAt must exist and not empty', function() {
    const task = new Task(null, null, new Date(), null);
    expect(task.startAt).to.exist;
    expect(task.startAt).to.instanceOf(Date);
  });
  it('endAt must exist and not empty', function() {
    const task = new Task(null, null, null, new Date());
    expect(task.endAt).to.exist;
    expect(task.endAt).to.instanceOf(Date);
  });
});
