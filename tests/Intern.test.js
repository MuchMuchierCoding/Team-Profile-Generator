const Inter = require('../lib/Intern');
const intern = new Intern('Sarah', '010203', 'sarahw@gmail.com', 'UofU');

test('test to set Intern values for Intern object', () => {
    expect(Inter.name).toBe('Sarah');
    expect(Inter.id).toBe('010203');
    expect(Inter.email).toBe('sarahw@gmail.com');
    expect(Inter.school).toBe('UofU');
});

test('test to set name from getName()', () => {
    expect(Inter.getName()).toBe('Sarah');
});

test('test to set id from getId()', () => {
    expect(Inter.getId()).toBe('010203');
});

test('test to set email from getEmail()', () => {
    expect(Inter.getEmail()).toBe('sarahw@gmail.com');
});

test('test to set github from getGithub()', () => {
    expect(Inter.getSchool()).toBe('UofU');
});

test('test to set Role from getRole()', () => {
    expect(Inter.getRole()).toBe('Intern');
});

