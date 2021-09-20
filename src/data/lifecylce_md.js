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
