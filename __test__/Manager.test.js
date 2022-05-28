const Manager = require('../lib/Manager');

test('Can create an office number', () => {
    const testOfficeNumber = 5;
    const e = new Manager('Jasper', 1, 'test@test.com', testOfficeNumber);
    expect(e.testOfficeNumber).toBe(testOfficeNumber);
});

test('Can get office number via getOffice()', () => {
    const testOfficeNumber = 5;
    const e = new Manager('Jasper', 1, 'test@test.com', testOfficeNumber);
    expect(e.getOffice()).toBe(testOfficeNumber);
});

test('Testing role', () => {
    const testValue = 'Manager';
    const e = new Manager('Jasper', 1, 'test@test.com', 5);
    expect(e.getRole()).toBe(testValue);
})