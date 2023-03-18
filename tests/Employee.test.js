const Employee = require('../lib/Employee');
const employee = new Employee('Sarah', '010203', 'sarahw@gmail.com');

test('test to set employee values for employee object', () => {
    expect(employee.name).toBe('Sarah');
    expect(employee.id).toBe('010203');
    expect(employee.email).toBe('sarahw@gmail.com');
});

test('test to set name from getName()', () => {
    expect(employee.getName()).toBe('Sarah');
});

test('test to set id from getId()', () => {
    expect(employee.getId()).toBe('010203');
});

test('test to set email from getEmail()', () => {
    expect(employee.getEmail()).toBe('sarahw@gmail.com');
});

test('test to set Role from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});