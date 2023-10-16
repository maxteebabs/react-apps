import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  mockedContactInfo,
  mockedContactInfoWithInvalidPhone,
  mockedContactInfoWithInvalidThumbnail,
} from '../mockData';

// const server = setupServer(
//   // Define a request handler for the API endpoint
//   rest.get('https://randomuser.me/api/', (req, res, ctx) => {
//     // Mocked response data
//     const mockedContactInfo = {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       // Add more data as needed
//     };

//     // Respond with a 200 OK status and JSON data
//     return res(ctx.status(200), ctx.json(mockedContactInfo));
//   })
// );

const server = setupServer(
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockedContactInfo));
      })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server };