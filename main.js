/**
 * Created by Gael on 17/01/2016.
 */

function MyClass() {};

MyClass.prototype = {

    init: function() {
        console.log("[MyClass] init()");
        console.log('ok');
    }

};

document.onload = function() {
    var instanceOfMyClass = new MyClass();
    instanceOfMyClass.init();
};