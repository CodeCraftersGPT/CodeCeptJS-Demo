//

Feature('Registration Test');

// able to navigate the registration page and see the registration page

// Scenario('Given I am on the registration page I should be able to see the registration page', ({ I }) => {
//     I.amOnPage('https://uneven-roomy-book.glitch.me/');
//     I.see('Registration Form', 'h2');
// }
// );

// if the user name is not feed in the registtration form then user should see the error message.
// we feed in all other input types except the username

Scenario('Given I am on the registration page and I do not fill the username I should see the error message', ({ I }) => {
    I.amOnPage('https://uneven-roomy-book.glitch.me/');
    // //input[@class='age-input']
    I.fillField('//input[@class="age-input"]', '25');
    ////input[@id="dob"]
    I.fillField('//input[@id="dob"]', '01-01-1995');
    // //input[@data-selector='email-field']

    I.fillField('//input[@data-selector="email-field"]', 'kumar@jatanix.com');
    //   
//#country-select
// seelct drop down value usa from the country select
    I.selectOption('//select[@id="country-select"]', 'USA');
    //terms-checkbox
    I.checkOption('.terms-checkbox');

    //chekc the male radio button
    I.checkOption("//input[@value='Male' and @type='radio']");

    I.click('//button[@type="submit"]');
    //check the submit button    

    //div[@id="nameError"]

    I.seeElement('//div[@id="nameError"]');

    I.see('Name is required', '//div[@id="nameError"]');

});

// scenario if all the fileds are filled in the registration form then user should be able to see the success message

Scenario('Given I am on the registration page and I fill all the fields I should see the success message', async ({ I }) => {

    I.amOnPage('https://uneven-roomy-book.glitch.me/');

    ////*[@id="registrationForm"]/input[1]
    I.fillField('//*[@id="registrationForm"]/input[1]', 'kumar');
    // //input[@class='age-input']
    I.fillField('//input[@class="age-input"]', '25');
    ////input[@id="dob"]
    I.fillField('//input[@id="dob"]', '01-01-1995');
    // //input[@data-selector='email-field']

    I.fillField('//input[@data-selector="email-field"]', 'kumar@jatanix.com');
    //   
//#country-select
// seelct drop down value usa from the country select
    I.selectOption('//select[@id="country-select"]', 'USA');
    //terms-checkbox
    I.checkOption('.terms-checkbox');

    //chekc the male radio button
    I.checkOption("//input[@value='Male' and @type='radio']");

    I.click('//button[@type="submit"]');

    // seeelement for the success message //*[@id="successMessage"]

    I.seeElement('//*[@id="successMessage"]');
    // see the success message

    I.see('Registration successful!', '//*[@id="successMessage"]');

   let text = await  I.grabTextFrom('//*[@id="successMessage"]')

      

});

