const Intern = require('../lib/Intern');
const intern = new Intern('Sarah', '010203', 'sarahw@gmail.com', 'UofU');

test('test to set Intern values for Intern object', () => {
    expect(intern.name).toBe('Sarah');
    expect(intern.id).toBe('010203');
    expect(intern.email).toBe('sarahw@gmail.com');
    expect(intern.school).toBe('UofU');
});

test('test to set name from getName()', () => {
    expect(intern.getName()).toBe('Sarah');
});

test('test to set id from getId()', () => {
    expect(intern.getId()).toBe('010203');
});

test('test to set email from getEmail()', () => {
    expect(intern.getEmail()).toBe('sarahw@gmail.com');
});

test('test to set github from getGithub()', () => {
    expect(intern.getSchool()).toBe('UofU');
});

test('test to set Role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});

