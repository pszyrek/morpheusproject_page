const _ = require('lodash')
console.log(_)

function sizeClass() {
    var sizeClassElems = document.querySelectorAll('[size-class]');

    console.log('fupa')


    console.log(sizeClassElems, 'test');


}

window.addEventListener('resize', sizeClass);