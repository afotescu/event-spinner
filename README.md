##`event-spinner` 

`event-spinner` is a simple html element based on [FontAwesome](http://fontawesome.io/) icons which works with the help of EventEmitter

## Guide

##### 1. Installation

`npm install --save event-spinner`

##### 2. Add  [FontAwesome](http://fontawesome.io/) to your css
##### NOTE: This can be change at anytime
```
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```
##### 3. Initialize event-spinner with options in your application

```javascript
import eventSpinner from 'event-spinner';

const config = {
    spinner: 'fa-spinner', // icon to spin
    animation: 'fa-spin', // animation type
    size: 'fa-3x', // icon size 
    fixed: true, // use fa-fw or no
    rgba: [255, 255, 255, 0.5], // rgba color
    container: 'app', // id of container where spinner should be used
    z: 8000, // z-index
    top: 50, // position from top
    left: 50, // position from left
};
export const spinner = new eventSpinner(config);
```

##### 4. Import your initialized spinner and use 

```javascript
import { spinner }  from './initializedSpinner';

const getSomeData = () => {
    spinner.showSpinner();
    fetch('someurl')
        .then((res) => {
            spinner.hideSpinner();
            // process results
        })
        .catch((err) => {
            spinner.hideSpinner();
            // do smth with error
        })
};

```

default props: In case you don't pass the props

```
spinner: 'fa-spinner'
animation: 'fa-spin'
size: 'fa-3x' 
fixed: true
rgba: [255, 255, 255, 0.5]
container: 'app'
z: 8000
top: 50
left: 50
```

# Example

You can checkout the demo in example folder by downloading and running demo.html in your browser

# TODO
create test.