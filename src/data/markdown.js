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


## Let's create an app
#### :
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

*We need to include the minified css file in our 'index.js'*


~~~js
...
import 'semantic-ui-css/semantic.min.css'
...
~~~
`;
