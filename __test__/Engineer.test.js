const Engineer = require('../lib/Engineer');

test('Can create a GitHub using constructor', () => {
    const testGithub = 'GitHubUser';
    const e = new Engineer('Jasper', 1, 'test@test.com', testGithub);
    expect(e.github).toBe(testGithub);
});

test('Can get GitHub username via getGithub()', () => {
    const testGithub = 'GitHubUser';
    const e = new Engineer('Jasper', 1, 'test@test.com', testGithub);
    expect(e.getGithub()).toBe(testGithub);
});

test('Testing role', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Jasper', 1, 'test@test.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
});