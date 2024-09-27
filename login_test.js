// Feature('Login Test');

// Scenario('Given Valid User Name and Password I should be able to loging to dashboard',  ({ I }) => {
//  I.amOnPage('https://bustling-cold-porpoise.glitch.me/');
//  // see if the Login Page is displayed in h2 tag
//   I.see('Login Page', 'h2');
//   // for the username fill the valid username.user,password
//   // i need to fill the username with the value user in to field with css selector #username
//    I.fillField('#username', 'user');
//   // fillField with password
//    I.fillField('#password', 'password');
//  // click on the login button with locator #loginButton
//     I.click('#loginButton');
//     I.see('Dashboard', 'h2');
// });

// Scenario("Given Wrong username and password user should be able to see the error message", ({ I }) => {
//     I.amOnPage('https://bustling-cold-porpoise.glitch.me/');
//     I.see('Login Page', 'h2');
//     I.fillField('#username', 'wronguser');
//     I.fillField('//input[@id="password"]', 'wrongpassword');
//     I.click({xpath: '//button[@id="loginButton"]'});
//     I.seeElement({xpath: '//div[@id="errorMessage"]'});
//     I.see('Invalid Username or Password', {xpath: '//div[@id="errorMessage"]'});
// });
