const Intern = require('../lib/Intern');

test('Can set school via constructor', () => {
    const testSchool = 'CSUF';
    const e = new Intern('Jasper', 1, 'test@test.com', testSchool);
    expect(e.school).toBe(testSchool);
});

test('Can get school via getSchool()', () => {
    const testSchool = 'CSUF';
    const e = new Intern('Jasper', 1, 'test@test.com', testSchool);
    expect(e.getSchool()).toBe(testSchool);
});

test('Testing role', () => {
    const testValue = "Intern";
    const e = new Intern('Jasper', 1, 'test@test.com', 'CSUF');
    expect(e.getRole()).toBe(testValue);
});