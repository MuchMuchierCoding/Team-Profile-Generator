const Manager = require('../lib/Manager');
const manager = new Manager('Sarah', '010203', 'sarahw@gmail.com', '123-456-7890');

test('test to set manager values for manager object', () => {
    expect(manager.name).toBe('Sarah');
    expect(manager.id).toBe('010203');
    expect(manager.email).toBe('sarahw@gmail.com');
    expect(manager.officeNumber).toBe('123-456-7890');
});

test('test to set name from getName()', () => {
    expect(manager.getName()).toBe('Sarah');
});

test('test to set id from getId()', () => {
    expect(manager.getId()).toBe('010203');
});

test('test to set email from getEmail()', () => {
    expect(manager.getEmail()).toBe('sarahw@gmail.com');
});

test('test to set Office Number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('123-456-7890');
});

test('test to set Role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});

