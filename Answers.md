1. What problem does the context API help solve?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are middle wear used to enlighten the flow of code to beter utilize a sytem that allows us to attach it to multiple points 

reducers specify how the apps state changes to actions

the store holds the entire state tree

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is global, and your component state is local.

Component state however, lives within that specific component. you choose application state when you have to access multiple points of the code tree so as not to put to much in the app.js

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!


hooks because of the customizable ablity to manage states inside functional components.