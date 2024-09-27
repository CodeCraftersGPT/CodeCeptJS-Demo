// Feature('Book API Test');

// Scenario('Fetch all books with titles and authors', async ({ I }) => {
//     const { expect } = await import('chai');
    
//     const query = `
//         query {
//             books {
//                 id
//                 title
//                 author
//             }
//         }
//     `;

//     const response = await I.sendQuery(query);
    
//     I.seeResponseCodeIsSuccessful();
//     I.seeResponseCodeIs(200);

//     // Check if the response is successful
//     expect(response.status).to.equal(200);

//     // Check that "books" array exists in the response
//     expect(response.data).to.have.property('data');
//     expect(response.data.data).to.have.property('books');

//     // Check that books are an array with at least one entry
//     expect(response.data.data.books).to.be.an('array');
//     expect(response.data.data.books.length).to.be.greaterThan(0);
// });

// Scenario('Fetch a book by ID with all fields', async ({ I }) => {
//     const { expect } = await import('chai');
    
//     const query = `
//         query {
//             book(id: "1") {
//                 id
//                 title
//                 author
//             }
//         }
//     `;

//     const response = await I.sendQuery(query);
    
//     I.seeResponseCodeIsSuccessful();
//     I.seeResponseCodeIs(200);

//     // Check if the response is successful
//     expect(response.status).to.equal(200);

//     // Check that "book" object exists in the response
//     expect(response.data).to.have.property('data');
//     expect(response.data.data).to.have.property('book');

//     // Check that book has the required fields
//     expect(response.data.data.book).to.have.property('id');
//     expect(response.data.data.book).to.have.property('title');
//     expect(response.data.data.book).to.have.property('author');
// });

// Scenario('Fetch a book by ID with title and author', async ({ I }) => {
//     const { expect } = await import('chai');
    
//     const query = `
//         query {
//             book(id: "1") {
//                 title
//                 author
//             }
//         }
//     `;

//     const response = await I.sendQuery(query);
    
//     I.seeResponseCodeIsSuccessful();
//     I.seeResponseCodeIs(200);

//     // Check if the response is successful
//     expect(response.status).to.equal(200);

//     // Check that "book" object exists in the response
//     expect(response.data).to.have.property('data');
//     expect(response.data.data).to.have.property('book');

//     // Check that book has the required fields
//     expect(response.data.data.book).to.have.property('title');
//     expect(response.data.data.book).to.have.property('author');
// });

// Scenario('Add a new book and validate response', async ({ I }) => {
//     const { expect } = await import('chai');
    
//     const mutation = `
//         mutation {
//             addBook(input: { title: "The Catcher in the Rye", author: "J.D. Salinger" }) {
//                 id
//                 title
//                 author
//             }
//         }
//     `;

//     const response = await I.sendMutation(mutation);
    
//     I.seeResponseCodeIsSuccessful();
//     I.seeResponseCodeIs(200);

//     // Check if the response is successful
//     expect(response.status).to.equal(200);

//     // Check that "addBook" object exists in the response
//     expect(response.data).to.have.property('data');
//     expect(response.data.data).to.have.property('addBook');

//     // Check that the added book has the required fields
//     expect(response.data.data.addBook).to.have.property('id');
//     expect(response.data.data.addBook).to.have.property('title');
//     expect(response.data.data.addBook).to.have.property('author');
// });