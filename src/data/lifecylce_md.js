export const lifecycle_md = `
### Component Lifecycle Methods - Overview

React components go through several 'lifecycle methods' that allow us to override and run code at particular times in the process

Below are a list of lifecycle methods broken into 4 different categories:

#### Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
~~~js
constructor( ) 
static getDerivedStateFromProps()
render( ) 
componentDidMount( ) 
~~~

#### Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
~~~js
static getDerivedStateFromProps( )
shouldComponentUpdate( )
render( ) 
getSnapshotBeforeUpdate( )
componentDidUpdate( ) 
 ~~~

#### Unmounting
This method is called when a component is being removed from the DOM:
~~~js
 componentWillUnmount( ) 
~~~
 

#### Error Handling 
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
~~~js
static getDerivedStateFromError( )
componentDidCatch( )
 ~~~

#### render( )
 
~~~js
class MyComponent extends React.Component {
  render() {
  
  }
}
 ~~~
 

The render( ) method is the only required method in a class component.

When called, it should examine this.props and this.state and return React elements.

Typically created via JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
The render( ) function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

If you need to interact with the browser, perform your work in componentDidMount( ) or the other lifecycle methods instead. Keeping render( ) pure makes components easier to think about.

 

#### constructor( )
 ~~~js
class MyComponent extends React.Component {
  constructor(props) {
    super(props); 
  }
}
~~~

The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

Typically, in React constructors are only used for two purposes:

Initializing local state.
Binding event handler methods.
 

NOTE: Avoid copying props into state! This is a common mistake:
~~~js
constructor(props) {
  super(props);
  // Don't do this!
  this.state = { color: props.color };
}
~~~

It is unnecessary and it creates bugs.

Instead, do this:
  ~~~js
constructor(props) {
  super(props);
  this.state = { color: this.props.color };
}
~~~
#### componentDidMount( )
 
  ~~~js
componentDidMount() {
  // component mounted to page
}
~~~
 

componentDidMount( ) is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. This is a great place to place code that will go and make a request to a database endpoint. (Example: making an api call go get all the people from your database).

This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount( ).

You may call setState( ) immediately in componentDidMount( ). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render( ) will be called twice in this case, the user won’t see the intermediate state.

 

#### componentDidUpdate( )
 
~~~js
componentDidUpdate(prevProps, prevState) {
}
~~~
 

componentDidUpdate( ) is invoked immediately after updating occurs. This method is not called for the initial render.

Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

componentDidUpdate( ) also gives us access to the previous props and previous state.

 

You may call setState( ) immediately in componentDidUpdate( ) but note that it must be wrapped in a condition, or you’ll cause an infinite loop. Look at the example below:

~~~js
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
~~~
 

#### componentWillUnmount( )
 
~~~js
componentWillUnmount() {
}
 ~~~

componentWillUnmount( ) is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount( ).

You should not call setState( ) in componentWillUnmount( ) because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

#### Lifecycle Method Diagram 
![](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1
 )
`;

export const hooks_md = `

## useState
The *****useState***** hook lets you add state to function components.

It returns two values, state and a function to update the state. it takes one value which is the default value of the state.  Let's look at an example

~~~js
import React, { useEffect, useState } from "react";

const Animation = () => {
  const [xPos, setXPos] = useState(0);
  return (
    <>
      <div style={styles.container}>
        <h1 style={{ ...styles.dvd, left: xPos }}>DVD</h1>
      </div>
      {xPos}
      <button onClick={() => setXPos(xPos + 10)}>move forward</button>
      {/* Can also pass a function to useEffect where param is previous state  */}
      <button onClick={() => setXPos((prevState) => prevState - 10)}>
        move backwords
      </button>
    </>
  );
};

const styles = {
  container: {
    border: "1px solid blue",
    position: "relative",
    height: "300px",
    width: "300px"
  },
  dvd: {
    position: "absolute"
  }
};
export default Animation;
~~~

## useEffect
The *****useEffect***** hook allows us to do life cycle methods lets looks at it

~~~js
import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  // called when any state changes
  useEffect(() => {
    console.log("first useEffect");
  });

  // only want to do this on mount
  useEffect(() => {
    console.log(" on mount");
    setData("data set");
  }, []);
  // only run when count changes to do this on mount
  useEffect(() => {
    console.log("count changed");
    if (count > 10) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <p>data: {data}</p>
      <p>
        count: {count} <button onClick={() => setCount(count + 1)}>add</button>
      </p>

      <p>
        toggle:{toggle ? "true" :"false"} <button onClick={() => setToggle(!toggle)}>toggle</button>
      </p>
    </div>
  );
};
export default UseEffectDemo;
~~~

## useReducer
A “reducer” is a fancy word for a function that takes 2 or more values and returns 1 value.  We have seen this in the reduce function in arrays.  Let's see
how this looks with the useReducer hook.  

The useReducer is similar to the useState hook, it just gives us state and a way to set the state.  useReducer is preferred when our state or the actions we want to do on it get more complicated.  For now, we will keep this example simple.

~~~js
import React, { useReducer } from "react";

const CounterReducer = () => {
  // First render will create the state, and it will
  // persist through future renders
  const [sum, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <>
      {sum}
      <br />
      {/* we 'dispatch' an 'action' */}
      <button onClick={() => dispatch("add")}>Add 1</button>
      <button onClick={() => dispatch("minus")}>minus 1</button>
    </>
  );
};

export default CounterReducer;

~~~

`;

export const homework_md = `
# Homework
choose one (rock paper scissors or animations)

## Option 1: Rock Paper Scissors
#### Basic Objectives:

- A user selects rock, paper, or scissors
- Computer randomly chooses
- Display the user and computers choice on the screen
- Display the winner
- Keep track of wins, losses, & ties
- Use images to make a choice

#### Bonus Objectives:
- Track the percentage of times the user has won/ lost/ tied
- Make it so it works with two players
- See if you can use componentDidUpdate( ) 
- Color a win differently than a loss so it is easy to tell if the user won.
 

 

## Option 2: React Lifecycle Methods and Animations

#### Requirements

- use inline styling and be able to pass style properties to be components(example the height and width of a container)
- be creative and experiment
- use set interval to create an animation/game
- use componentDidMount and  (or equvalent with hooks)
- create multiple components and decide where the state should live
`;
