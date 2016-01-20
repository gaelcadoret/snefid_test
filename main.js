/**
 * Created by Gael on 17/01/2016.
 */

function MyClass() {};

MyClass.prototype = {

    init: function() {
        console.log("[MyClass] init()");
        console.log('Welcome home on dev branch');
        console.log('POUR MISE EN PRODUCTION AUTOMATIQUE ! Ca marche !');
        console.log('test pour environnement DEV');
    }

};

document.onload = function() {
    var instanceOfMyClass = new MyClass();
    instanceOfMyClass.init();
};