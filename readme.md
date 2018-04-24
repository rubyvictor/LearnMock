# LAB EXERCISE

`git clone https://github.com/rubyvictor/LearnMock.git`


`yarn install`
`yarn test`

## HOW TO INSTALL JEST

`yarn add jest --dev`

## HOW TO INSTALL SINON
`yarn add sinon --dev`

### STUBS, MOCKS and SPIES
-  **Stubs** enable us to replace functions i.e. return whatever we want
-  **Spies** create fake functions which can be used to track executions such as the number of times it is called
-  **Mocks** are fake methods.  Pre-programmed behaviour and pre-programmed expectations.

### HOW TO MOCK AND WHAT IS MOCKING
syntax: `jest.mock(moduleName)`
Mocks are used to record and verify the interaction between two classes. 
They are beneficial to use at the I/O boundaries - database, networks, XML-RPC servers etc - of the application, so that the interactions of these **external resources can be implemented when they are not in the application's control.**

eg. We use mocks when we don't want to invoke production code or when there is no easy way to verify, that intended code was executed. There is no return value and no easy way to check system state change. An example can be a functionality that calls e-mail sending service.
We don't want to send e-mails each time we run a test. Moreover, it is not easy to verify in tests that a right email was send. Only thing we can do is to verify the outputs of the functionality that is exercised in our test. In other worlds, verify that e-mail sending service was called.

####### Test lifecycle with mocks:
- Setup data - Prepare object that is being tested.
- Setup expectations - Prepare expectations in mock that is being used by primary object.
- Exercise - Test the functionality.
- Verify expectations - Verify that correct methods has been invoked in mock.
- Verify state - Use asserts to check object's state.
- Teardown - Clean up resources.

#### HOW TO STUB AND WHY DO YOU STUB
> Martin Fowler defines Stubs as objects that provide canned answers to calls made during the test.

syntax: `jest.mock(moduleName,factory)`

The stub does nothing more or less than returning the value that we need for the test.The return value is hard-coded. 
It is used when we are testing that a class or method delivers expected output for a known input. They are easy to use in testing, and involve no extra dependencies for unit testing.

####### Test lifecycle with stubs:
- Setup - Prepare object that is being tested and its stubs collaborators.
- Exercise - Test the functionality.
- Verify state - Use asserts to check object's state.
- Teardown - Clean up resources.

#### Mock vs Stub 
In summary: 
> Stub is an object that holds predefined data and uses it to answer calls during tests. It is used when we cannot or don't want to involve objects that would answer with real data or have undesirable side effects.

> Mocks are objects that register calls they receive. In test assertion we can verify on Mocks that all expected actions were performed.

### RESOURCES

```https://facebook.github.io/jest/docs/en/mock- functions.html```

```https://facebook.github.io/jest/docs/en/jest-object.html#jestmockmodulename-factory-options```

```http://sinonjs.org/#get-started```

```http://www.wheresrhys.co.uk/fetch-mock/```

```https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs```

```https://www.sitepoint.com/promises-in-javascript- unit-tests-the-definitive-guide/```

```http://mherman.org/blog/2017/11/06/stubbing- http-requests-with-sinon/#.Wt3h8UxuLpA```
