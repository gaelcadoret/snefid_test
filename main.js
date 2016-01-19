/**
 * Created by Gael on 17/01/2016.
 */

function MyClass() {};

MyClass.prototype = {

    init: function() {
        console.log("[MyClass] init()");
        console.log('Welcome home on dev branch');
        console.log('Gagou 1');
        console.log('Gagou 2');
        console.log('Gagou 3');
        console.log('Gagou 4');
        console.log('Gagou 5');
        console.log('Gagou 6');
        console.log('Gagou 7');
        console.log('Gagou 8');
        console.log('Gagou 9');
        console.log('Gagou 10');
        console.log('Gagou 11');
        console.log('Gagou 12');
        console.log('REJEB 13'); // par exemple ;)
        console.log('Gael 14');
        console.log('Gael 15');
        console.log('GAEL 16');
        console.log('GAEL 17');
    }

};

document.onload = function() {
    var instanceOfMyClass = new MyClass();
    instanceOfMyClass.init();
};