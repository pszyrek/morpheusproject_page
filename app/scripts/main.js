const _ = require('lodash');

function sizeClass() {
    var sizeClassElems = document.querySelectorAll('[size-class]');

    var arr = [1, 2, 3, 4, 5]
    _.forEach(arr, (item) => { console.log(item) })

    console.log('fupa')


    console.log(sizeClassElems, 'test');


}

window.addEventListener('resize', sizeClass);