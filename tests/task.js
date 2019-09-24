const chai = require('chai');
const expect = chai.expect;

const { Task } = require('./../src/todo');

describe('Task', function() {
  it('Test must have a title, a description, a start and end date', function() {
    const task = new Task(
      'this a test',
      'this is a test',
      new Date(),
      new Date()
    );
    expect(task.title).to.exist;
    expect(task.title).to.not.empty;
    expect(task.description).to.exist;
    expect(task.description).to.not.empty;
    expect(task.startAt).to.exist;
    expect(task.startAt).to.be.instanceOf(Date);
    expect(task.endAt).to.exist;
    expect(task.endAt).to.be.instanceOf(Date);
  });
});
