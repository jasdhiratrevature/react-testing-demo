import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";
describe('testing the Counter Component',()=>{
//test block
test("increments counter", () => {
// render the component on virtual dom
render(<Counter />);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
});
//test block
test("decrements counter", () => {
    // render the component on virtual dom
    render(<Counter />);
    
    //select the elements you want to interact with
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");
    
    //interact with those elements
    fireEvent.click(decrementBtn);
    
    //assert the expected result
    expect(counter).toHaveTextContent("2");
    });
});