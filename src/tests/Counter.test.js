import {
  fireEvent,
  getByDisplayValue,
  getByRole,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";
// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  render(<Counter />);
  // Render the Counter component here
});

test("renders counter message", () => {
  render(<Counter />);
  const counterText = screen.getAllByText(/Counter/i);
  expect(counterText[0]).toBeInTheDocument();

  // Complete the unit test below based on the objective in the line above
});

test("should render initial count with value of 0", () => {
  render(<Counter />);
  const num = screen.getAllByText(/0/i);
  expect(num[0]).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test("clicking + increments the count", () => {
  const { getByText } = render(<Counter />);
  const button = screen.getAllByRole("button");
  fireEvent.click(button[0]);
  expect(getByText("1")).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test("clicking - decrements the count", () => {
  const { getByText } = render(<Counter />);
  const button = screen.getAllByRole("button");
  fireEvent.click(button[1]);
  expect(getByText("-1")).toBeInTheDocument();

  // Complete the unit test below based on the objective in the line above
});
