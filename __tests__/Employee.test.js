const { TestScheduler } = require('jest');
const id = require('../lib/Employee');

test('gets random 5 digit number between 00001 and 99999', () => {
    expect(id()).toBeGreaterThanorEqual(00001);
    expect(id()).toBeLessThanOrEqual(99999);
});

module.exports = () => {
    this.name = "Joshua";
    this.id = "55555",
    this.bio = "An up and coming web developer",
    this.role = "employee";
};