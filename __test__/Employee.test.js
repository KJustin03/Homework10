const Employee = require('../lib/Employee');

test("Can create an new employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Testing name' , () => {
    const name = "Allyson";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Testing ID' , () => {
    const id = "3";
    const e = new Employee("Jasper", id);
    expect(e.id).toBe(id);
});

test('Testing email', () => {
    const testValue = "test@test.com";
    const e = new Employee("Jasper", 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name via getName()', () => {
    const testName = "Allyson";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test('Can get ID via getId()', () => {
    const testId = "3";
    const e = new Employee('Jasper', testId);
    expect(e.getId()).toBe(testId);
});

test('Can get email via getEmail()', () => {
    const testEmail = "test@test.com";
    const e = new Employee('Jasper', 1, testEmail);
    expect(e.getEmail()).toBe(testEmail)
})

test('Testing role', () => {
    const testValue = "Employee";
    const e = new Employee('Allyson', 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});