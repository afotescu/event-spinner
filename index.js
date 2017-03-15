var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

var eventSpinner = function(config) {
    var config = config || {};
    config.fixed = config.fixed || true;
    this.spinner = config.spinner || 'fa-spinner';
    this.animation = config.animation || 'fa-spin';
    this.size = config.size || 'fa-3x';
    this.fixed = (config.fixed ? 'fa-fw' : '');
    this.rgba = config.rgba || [255, 255, 255, 0.5];
    this.container = config.container || 'app';
    this.z = config.z || 8000;
    this.top = config.top || 50;
    this.left = config.left || 50;

    var divContainer = document.createElement('div');
    var divSpinner = document.createElement('div');
    var spinner = document.createElement('i');

    divContainer.style.display = 'none';
    spinner.className = 'fa ' + this.spinner + ' ' + this.animation + ' ' + this.size + ' ' + this.fixed;
    var vm = this;
    event.addListener('addSpinner', function() {
        divContainer.style.display = null;
        divContainer.style.width= '100%';
        divContainer.style.height= '100%';
        divContainer.style['z-index']= vm.z;
        divContainer.style.top= '0';
        divContainer.style.left= '0';
        divContainer.style['background-color']= 'rgba(' + vm.rgba +')';
        divContainer.style.position= 'absolute';
        divSpinner.style.position= 'fixed';
        divSpinner.style.top = vm.top + '%';
        divSpinner.style.left = vm.left + '%';
        divSpinner.appendChild(spinner);
        divContainer.appendChild(divSpinner);
        document.getElementById(vm.container).appendChild(divContainer);
    });

    event.addListener('removeSpinner', function() {
        divContainer.style.display = 'none';
    });
};

eventSpinner.prototype.showSpinner= function() {
  event.emit('addSpinner');
};

eventSpinner.prototype.hideSpinner= function() {
  event.emit('removeSpinner');
};


module.exports = eventSpinner;