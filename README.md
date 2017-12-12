### Running the app
npm i
npm start

## Coding style
This application uses ES6 and allot of Functional Programming concepts.

I call this JS style of coding **Light Functional JavaScript**, trying to enforce the concept as pure functions.

I rely allot on closures, higher order functions, and currying.

Also, dependency injection is done with functions.

The application favors composition rather then inheritance, a perfect showcase being the **color-spotter functional factory**.

## CSS Style
I use the **BEM methodology**, it's a clean way to encapsulate and organize your code.

## Technologies

### Create React App
I have decided to use Create React App, because it's an out of the box way to build React applications.

CRA is amazing and supported by Facebook.

### Redux
The application uses an external state management system called Redux and some of it's libraries like React Thunks.

Keeping the state separate allows me to use only functional components.

Also, the **redux-devtools-extension** together with a plugin in the browser gives you visuals and real-time info about the application's state.

### Bootstrap
Just because I wanted to prototype something quickly. Don't really need this for this project but I wanted to showcase how you can integrate it with CRA.

### Ramda
Ramda is a functional library for JavaScript which gets it right.
I used the pipe operator for this project, but the toolset is awesome.

Also, I could have used the curry method allot, but I wanted to showcase curry-ing without the library.

### Testing

Testing is easy due the FP principles used all around the app.
