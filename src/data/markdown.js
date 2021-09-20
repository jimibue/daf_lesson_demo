export const md = `
# here is some js to copy

~~~js
const x = 123;
const e = 123;
const r = 123;
const t = 123;
const r = 123;
const r = 123;
<SomeReact>
   <Yo />
</SomeReact>   
~~~

### more JS to copy
~~~js
console.log('hello')
~~~

~~~ruby
def hello
  put "hello"
end  
~~~

`;

export const projectSetupMD = `



## Setup

#### Let's create an app

~~~terminal
$ yarn create react-app clock-app
$ cd clock-app
$ yarn add semantic-ui-react semantic-ui-css
$ yarn start
~~~

#### Here we:
- create our application
- cd into the project
- add semantic-ui-react
 - start our server

*We need to include the minified css file in our **index.js***


~~~js
...
import 'semantic-ui-css/semantic.min.css'
...
~~~

*intial **App.js** setup*
~~~js
import React from 'react';
import Clock from "./Clock";
import { Button, Container, } from "semantic-ui-react";

class App extends React.Component {
  state = { showClock: false, };

  toggleShowClock = () => {
    this.setState( state => {
      return { showClock: !state.showClock, };
    })
  }

  render() {
    return (
      <Container style={{ marginTop: "25px", }}>
        { this.state.showClock && <Clock /> }
        <Button onClick={this.toggleShowClock} color="purple">Toggle Clock</Button>
      </Container>
    );
  }
}

export default App;
~~~

Here, our component is rendering a component called <Clock> that hasn't been created yet so our application is currently breaking. We are also using a button to toggle the clock as well. This will be important to demonstrate some behavior a little later on. 

We need to create our <Clock> component in **src/Clock.js**.  so our app won't break anymore 

~~~js
import React from 'react';

class Clock extends React.Component {
  state = { date: new Date(), count: 0 };

  render() {
    return (
      <p>
        { this.state.date.toLocaleTimeString() } 
      </p>
    )
  }
}

export default Clock;

~~~

 Now our application isn't breaking anymore and if click our toggle button we will see the current time. 

Let's add some more functionality to our <Clock> component by adding our first component lifecycle method, componentDidMount( ).

~~~js
class Clock extends React.Component {
  state = { date: new Date(), count:0 };

  componentDidMount() {
    this.ticker = setInterval( () => this.tick(), 1000 );
  }

  tick = () => this.setState({ date: new Date(), count: this.state.count +1 });
  
  //If you check your console, you will notice a warning that we "can't perform a React state update on an unmounted component".
  //We can fix this by unsubscribing to that interval subscription when our component unmounts from the DOM (when we click our button and that toggles the clock).
  componentWillUnmount() {
    clearInterval(this.ticker);
  }
...
~~~

 When our component mounts to the virtual DOM, componentDidMount( ) is fired. Here we are adding an interval subscription to our application. This will call our tick( ) function every second and then it will update state with the new time. 

let's also add a componentDidUpdate function to have our count reset back to 0 once it hits 10. 
*Note that we need to be careful when setting State in a this method or we might find ourselves in a infinite loop*

~~~js

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);  // props from last render
    console.log(prevState); // state from last render
    // be carefull calling setState in componentDidUpdate
    // infinite loop potentail
    if (prevState.count === 10) {
      this.setState({ count: 0 });
    }
  }
~~~
Let's look at another popular use case to use a componentDidMount( ), fetching data from an API.  
This example uses the fetch library instead of axios and uses the .then .catch syntax.  Fetch is built into javascript that works similarly to axios.

~~~js
class Data extends React.Component {
  state = { data: [], loading: true };

  componentDidMount() {
    // fetch is like axios, it is already built in to js
    fetch("https://reqres.in/api/users?page=2") //https://randomuser.me/api/?results=10
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data.data);
        this.setState({ data: data.data, loading: false });
      })
      .catch((e) => {
        this.setState({
          data: [{ id: 1, name: "faking success in error" }],
          loading: false
        });
      });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <span>...Loading Data</span>;
    } else {
      return (
        <ol>
          {data.map((d) => (
            <li key={d.id}>{d.email}</li>
          ))}
        </ol>
      );
    }
  }
}
~~~
`;
