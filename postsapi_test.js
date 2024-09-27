// import the json file


// //  get request to get all posts via https://jsonplaceholder.typicode.com and validate the response usign the codeceptjs framework  


// Feature('API Testing - All Verbs');

// Scenario('Get all posts', async ({ I }) => {


//  const { expect } = await import('chai');

//   const response = await I.sendGetRequest('/posts');
//   // full url. https://jsonplaceholder.typicode.com/posts

//   // base api url is https://jsonplaceholder.typicode.com
//   // endpoint is /posts
//     // full url is https://jsonplaceholder.typicode.com/posts

//   I.seeResponseCodeIsSuccessful();
//   I.seeResponseCodeIs(200);
//   // check if the response contains the id, title, body and userId
//   I.seeResponseContainsKeys(['id', 'title', 'body', 'userId']);
//  // I.seeResponseContainsJson({ id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', userId: 1 });
//   I.seeResponseContainsJson({ id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', userId: 1 });

//   expect(response.data).to.be.an('array');
//   // check for the response data length to be 100
//   expect(response.data.length).to.equal(100);
//     // check if the response data has the id field
//     expect(response.data[0]).to.have.property('id');
//     // check if the response data has the title field
//     expect(response.data[0]).to.have.property('title');
//     // check if the response is application/json
//     expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
// }
// );

// // inalids posts url result in the error message 404

// Scenario('Get all posts with invalid URL', async ({ I }) => {
//   const response = await I.sendGetRequest('/posts123');
//   I.seeResponseCodeIs(404);
//   I.seeResponseCodeIsClientError();
// }
// );

// // we are sending a post request to create a new post with the title, body and userId
// // we are validating the response code to be 201
// // we are validating the response to contain the title, body and userId

// Scenario('Create a new post', async ({ I }) => {
//     const newPost = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     };
    
//     const { expect } = await import('chai');

    
//     const response = await I.sendPostRequest('/posts', newPost);

//     I.seeResponseCodeIs(201);
//     I.seeResponseContainsJson(newPost);

//     expect(response.data).to.have.property('title');
//     expect(response.data).to.be.an('object');
//     expect(response.data.title).to.equal(newPost.title);
//     expect(response.data.body).to.equal(newPost.body);
//     }

// );


     
// this is the base url for the api https://late-months-watch.loca.lt
// create a new book via the post request I.sendPostRequest('/books', newBook);
// response assert with the rseponse for the new book and code
// connected a databae write the api check innsert has been to 
// get the book by id via the get request I.sendGetRequest('/books/11');
// response assert with the rseponse for the new book and code

const baseAPI = 'https://late-months-watch.loca.lt';// import from the json file
Feature('Books API');

Scenario('Create a New Book', async ({ I }) => {

    const newBook = {
        id: '12',
        title: 'Playwright Testing',
        author: 'Prasad Phalle'
    };
    const {expect} = await import('chai');
    const response = await I.sendPostRequest('https://late-months-watch.loca.lt/books', newBook);
    I.seeResponseCodeIs(201);

    I.seeResponseContainsJson(newBook);
    // make another get request to get the book by id to validate the insertion
    const getResponse = await I.sendGetRequest('/books/12');
    I.seeResponseCodeIs(200);

    I.seeResponseContainsJson(newBook);
}
);















