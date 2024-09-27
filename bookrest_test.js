// Feature('Books API');

// Scenario('Get all books', async ({ I }) => {
//   const response = await I.sendGetRequest('/books');
//   I.seeResponseCodeIs(200);
//   I.seeResponseContainsJson(
//     { id: '3', title: '1984', author: 'George Orwell' },
//   );
// });

// Scenario('Add a new book', async ({ I }) => {
//   const newBook = {
//     id: '11',
//     title: 'The Pragmatic Programmer',
//     author: 'Andy Hunt'
//   };
  
//   const response = await I.sendPostRequest('/books', newBook);
//   I.seeResponseCodeIs(201);
//   I.seeResponseContainsJson(newBook);

//   // Verify the new book exists by GET request
//   const getResponse = await I.sendGetRequest('/books/11');
//   I.seeResponseCodeIs(200);
//   I.seeResponseContainsJson(newBook);
// });

// Scenario('Update a book', async ({ I }) => {
//   const updatedBook = {
//     id: '11',
//     title: 'The Pragmatic Programmer - Updated',
//     author: 'Andy Hunt'
//   };
  
//   const response = await I.sendPutRequest('/books/11', updatedBook);
//   I.seeResponseCodeIs(200);
//   I.seeResponseContainsJson(updatedBook);

//   // Verify the updated book by GET request
//   const getResponse = await I.sendGetRequest('/books/11');
//   I.seeResponseCodeIs(200);
//   I.seeResponseContainsJson(updatedBook);
// });

// Scenario('Delete a book', async ({ I }) => {
//   const response = await I.sendDeleteRequest('/books/11');
//   I.seeResponseCodeIs(200);

//   // Verify the book no longer exists
//   const getResponse = await I.sendGetRequest('/books/11');
//   I.seeResponseCodeIs(404);
// });
