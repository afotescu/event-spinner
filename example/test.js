var spinner = require('./../index');
var x = new spinner();
x.showSpinner();
setTimeout(function() {
    x.hideSpinner();
},10000);