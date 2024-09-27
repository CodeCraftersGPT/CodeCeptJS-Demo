// Feature('Login Page - Hard/Soft Assertions');

// Scenario('Check if Login Page text is visible with hard assertions', ({ I }) => {
//   // Open the login page
//   I.amOnPage('https://bustling-cold-porpoise.glitch.me/');

//   // Assert that the "Login Page" text is visible using XPath (hard assertion)
//   I.seeElement({ xpath: "//h2[normalize-space()='Login Page1']" });// even if the step is failed the test will continue

//   // If the above assertion passes, continue with other steps (if needed)
//   I.fillField('#username', 'user');
//   I.fillField('#password', 'password');
//   I.click('#loginButton');

//   I.see('Welcome to your Dashboard!', 'h2');

//   // Continue other assertions or actions...
// });


// // Scenario('Check if Login Page text is visible with soft assertions', async ({ I }) => {
// //   const { assert } = await import('chai');

// //   // Open the login page
// //   I.amOnPage('https://bustling-cold-porpoise.glitch.me/');

// //   // Soft assertion: Check if "Login Page" text is visible using XPath
// //   try {
// //     const loginPageTextVisible = await I.grabNumberOfVisibleElements({ xpath: "//h2[normalize-space()='Login Page']" });
// //     assert(loginPageTextVisible > 0, 'Login Page text should be visible'); // Soft assertion
// //   } catch (err) {
// //     I.say('Login Page text is not visible, but continuing with the test...');
// //   }

// //   // Fill in the login form even if the previous assertion fails
// //   I.fillField('#username', 'user');
// //   I.fillField('#password', 'password');

// //   // Click the login button
// //   I.click('#loginButton');

// //   // Soft assertion: Check if "Welcome to your Dashboard!" text is visible using XPath
// //   try {
// //     const dashboardTextVisible = await I.grabNumberOfVisibleElements({ xpath: "//h2[normalize-space()='Welcome to your Dashboard!']" });
// //     assert(dashboardTextVisible > 0, '"Welcome to your Dashboard!" text should be visible'); // Soft assertion
// //   } catch (err) {
// //     I.say('"Welcome to your Dashboard!" text is not visible, but continuing with the test...');
// //   }

// //   // Additional soft checks can follow...
// // });



