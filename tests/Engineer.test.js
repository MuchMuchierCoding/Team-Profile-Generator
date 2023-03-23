const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Sarah', '010203', 'sarahw@gmail.com', 'saraw',);

test('test to set engineer values for engineer object', () => {
    expect(engineer.name).toBe('Sarah');
    expect(engineer.id).toBe('010203');
    expect(engineer.email).toBe('sarahw@gmail.com');
    expect(engineer.github).toBe('saraw');
});

test('test to set name from getName()', () => {
    expect(engineer.getName()).toBe('Sarah');
});

test('test to set id from getId()', () => {
    expect(engineer.getId()).toBe('010203');
});

test('test to set email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('sarahw@gmail.com');
});

test('test to set github from getGithub()', () => {
    expect(engineer.getGitHub()).toBe('saraw');
});

test('test to set Role from getRole()', () => {
    expect(engineer.getRole()).toBe('Employee');
});

