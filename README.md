## Test a React App with Jest and React Testing Library
Jest is a JavaScript test runner that provides resources for writing and running tests. 
React Testing Library offers a set of testing helpers that structure your tests based on user interactions rather than components’ implementation details. 
Both Jest and React Testing Library come pre-packaged with Create React App and adhere to the guiding principle that testing apps should resemble how the software will be used.

The npm test command starts the tests in an interactive watch mode with Jest as its test runner. When in watch mode, the tests automatically re-run after a file is changed. 
The tests will run whenever you change a file and let you know if that change passed the tests.

By default, Jest will look for files with the .test.js suffix and files with the .js suffix in __tests__ folders. When you make changes to the relevant test files, they will be detected automatically. As test cases are modified, the output will update automatically. 

A minimum of one test block is required in each test file. Each test block accepts two required parameters: the first argument is a string representing the name of the test case; the second argument is a function that holds the expectations of the test.

Inside the function, there is a render method that React Testing Library provides to render your component into the DOM. With the component that you want to test rendered into the testing environment’s DOM, you can now start writing code to assert against the expected functionality.

You will add a test block to the render method that will test if the landing page renders accurately before any API calls or selections are made.

The expect function is used every time you want to verify a certain outcome, and it accepts a single argument representing the value that your code produces. 
Most expect functions are paired with a matcher function to assert something about a particular value. 
For most of these assertions, you will use additional matchers provided by jest-dom to make it easier to check for common aspects found in the DOM. For example, .toHaveTextContent is the matcher for the expect function in the first line, while getByRole("heading") is the selector to grab the DOM element.

React Testing Library provides the screen object as a convenient way to access the pertinent queries needed to assert against the test DOM environment. 
By default, React Testing Library provides queries that allow you to locate elements within the DOM. There are three main categories of queries:

getBy* (most commonly used)
queryBy* (used when testing the absence of an element without throwing an error)
findBy* (used when testing asynchronous code)

