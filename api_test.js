// Feature('API Testing - GET Request');

// Scenario('Get a list of posts and validate response', async ({ I }) => {

//   const { expect } = await import('chai');
//   const response = await I.sendGetRequest('/posts');
  
//   // Validate status code using CodeceptJS helper
//   I.seeResponseCodeIs(200); // Validate HTTP status code is 200
//   I.seeResponseCodeIsSuccessful(); // Validate response code is in the 2xx range

//   I.seeResponseContainsJson({ userId: 1 });
//   I.seeResponseContainsKeys(['id', 'title', 'body', 'userId']);


  
//   // Chai assertions for the response data
//   expect(response.data).to.be.an('array'); // Check that the response data is an array
//   expect(response.data.length).to.equal(100); // Check that 100 posts are returned
//   expect(response.data[0]).to.have.property('id'); // Ensure each post has an 'id' field
//   expect(response.data[0]).to.have.property('title'); // Ensure each post has a 'title' field
// });


// // Feature('API Testing - GET Request');

// // Scenario('Get a list of posts', async ({ I }) => {
// //   const response = await I.sendGetRequest('/posts');
  
// //   // Assertions
// //   I.assertEqual(response.status, 200); // Verify that the status code is 200
// //   I.assertEqual(response.data.length, 100); // Check that the API returned 100 posts
// // });

// Feature('API Testing - POST Request');

// // get all posts

// // Scenario('Create a new post', async ({ I }) => {
  
    
// //     const response = await I.sendGetRequest('/posts');
    
// //     // Assertions
// //     I.assertEqual(response.status, 201); // Verify that the status code is 201
// //     I.assertEqual(response.status, 201); // Verify that the status code is 201
// //     I.assertEqual(response.data.title, post.title); // Check that the title is correct
// //     I.assertEqual(response.data.body, post.body); // Check that the body is correct
// //     I.assertEqual(response.data.userId, post.userId); // Check that the userId is correct
// //     }
// // );




// // Scenario('Given Valid User Name and Password I should be able to loging to dashboard',  async ({ I }) => {
// //     const response = await I.sendGetRequest('/posts');
// //     console.log(response);
// //     I.seeResponseCodeIsSuccessful();
// //    });



// Feature('API Testing - POST Request');

// Scenario('Create a new post and validate response', async ({ I }) => {
//   const { expect } = await import('chai');

//   const requestBody = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   };

//   // Send POST request to create a new post
//   const response = await I.sendPostRequest('/posts', requestBody);

//   // Validate status code using CodeceptJS helper
//   I.seeResponseCodeIs(201); // 201 Created

//   // Use Chai assertions for validation
//   expect(response.data).to.be.an('object');
//   expect(response.data).to.have.property('id'); // New post should have an id
//   expect(response.data.title).to.equal('foo'); // The title should match
//   expect(response.data.body).to.equal('bar'); // The body should match
//   expect(response.data.userId).to.equal(1); // The userId should match
// });


// Feature('API Testing - PUT Request');

// Scenario('Update an existing post and validate response', async ({ I }) => {
//   const { expect } = await import('chai');

//   const updateData = {
//     title: 'updated title',
//     body: 'updated body',
//     userId: 1
//   };

//   // Send PUT request to update post with id 1
//   const response = await I.sendPutRequest('/posts/1', updateData);

//   // Validate status code using CodeceptJS helper
//   I.seeResponseCodeIs(200); // 200 OK

//   // Use Chai assertions for validation
//   expect(response.data).to.be.an('object');
//   expect(response.data.id).to.equal(1); // The post id should still be 1
//   expect(response.data.title).to.equal('updated title'); // The title should be updated
//   expect(response.data.body).to.equal('updated body'); // The body should be updated
// });


// Feature('API Testing - DELETE Request');

// Scenario('Delete a post and validate response', async ({ I }) => {
//   const { expect } = await import('chai');

//   // Send DELETE request to delete post with id 1
//   const response = await I.sendDeleteRequest('/posts/1');

//   // Validate status code using CodeceptJS helper
//   I.seeResponseCodeIs(200); // 200 OK (JSONPlaceholder returns 200 on deletion)

//   // Check if the response body is empty after deletion
//   expect(response.data).to.be.empty;
// });








   

