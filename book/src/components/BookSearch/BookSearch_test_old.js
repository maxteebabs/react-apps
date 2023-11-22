import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import Book from './Books';
import books from  "../../books.json";

beforeEach(() => {
});

test('should test for search result text', () => {
  render(<Book books={books} />);
  const searchResultElem = screen.getByText('Search Results:');
  expect(searchResultElem).toBeInTheDocument();
});

// const author = screen.getByTestId('author');

// test('should type author', () => {
//   userEvent.type(author, 'Peter!');
//   // userEvent.click(button)
//   // expect(screen.getByDisplayValue("Peter!")).toHaveValue('Peter!');
//   const authorBox = screen.getByRole('textbox', { name: /Author/i });
//   expect(authorBox).toHaveValue('Peter!');
// });

test('should check for only author', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('author');
  fireEvent.change(elem, { target: { value: "Peter"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(1);
});


test('should check for only title', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('title');
  fireEvent.change(elem, { target: { value: "Things"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(1);
  expect(screen.getByText('Chinua Achebe')).toBeInTheDocument();
});

test('should check for only country', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('country');
  fireEvent.change(elem, { target: { value: "Nigeria"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(2);
  expect(screen.getAllByText('Chinua Achebe').length).toEqual(2);
});

test('should check for only language', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('language');
  fireEvent.change(elem, { target: { value: "Eng"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(4);
  expect(screen.getAllByText('Chinua Achebe').length).toEqual(2);
});

test('should check for only year', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('year');
  fireEvent.change(elem, { target: { value: "19"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(3);
  expect(screen.getByText('Asake Flora')).toBeInTheDocument();
  expect(book[1]).toHaveTextContent("Asake Flora!");
});

test('should check for only author and title', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('author');
  const elem1 = screen.getByTestId('title');
  fireEvent.change(elem, { target: { value: "Peter"}});
  fireEvent.change(elem1, { target: { value: "Achebe"}});
  const book = screen.queryAllByTestId("book");
  expect(book.length).toEqual(0);
});

test('should check for only author and language', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('author');
  const elem1 = screen.getByTestId('language');
  fireEvent.change(elem, { target: { value: "Peter"}});
  fireEvent.change(elem1, { target: { value: "English"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(1);
  expect(screen.getByText('Peter Jackson')).toBeInTheDocument();
});

test('should check for only author and country', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('author');
  const elem1 = screen.getByTestId('country');
  fireEvent.change(elem, { target: { value: "Peter"}});
  fireEvent.change(elem1, { target: { value: "United Kingdom"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(1);
  expect(screen.getByText('Peter Jackson')).toBeInTheDocument();
});

test('should check for only author and year', () => {
  render(<Book books={books} />);
  const elem = screen.getByTestId('author');
  const elem1 = screen.getByTestId('year');
  fireEvent.change(elem, { target: { value: "Peter"}});
  fireEvent.change(elem1, { target: { value: "20"}});
  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(1);
  expect(screen.getByText('Peter Jackson')).toBeInTheDocument();
});

test('should check for all fields entered', () => {
  render(<Book books={books} />);
  fireEvent.change(screen.getByTestId('author'), { target: { value: "Peter"}});
  fireEvent.change(screen.getByTestId('title'), { target: { value: "Let"}});
  fireEvent.change(screen.getByTestId('country'), { target: { value: "United Kingdom"}});
  fireEvent.change(screen.getByTestId('language'), { target: { value: "English"}});
  fireEvent.change(screen.getByTestId('year'), { target: { value: "20"}});

  const book = screen.getAllByTestId("book");
  expect(book.length).toEqual(1);
  expect(screen.getByText('Peter Jackson')).toBeInTheDocument();
});


