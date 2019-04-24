/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'this' can have a global binding when referenced in the global scope. Will return the window and/or console object. generally referencing the entire library of JS.

* 2. 'this' can be implied, by referencing a particular object. For example, I have an object with a function inside referencing 'this'
when the function is called, 'this' implies the object, by calling the function inside the object  ex. "object.function();"   
When you use 'this' inside of the function, contained within the object, it will always imply the object the function rests inside, so long as the object is referenced when the function is called.

* 3. 'this' can also be used as a 'New Binding' in a constructor function. when a constructor function is called. 
'this.whatever = whatever; will become bound to the NEW object that is created. similiar to an implied function, a new binding 'this' will reference the object that was just created.


* 4.  'this' can be explicitly bound to an object as well. Referred to as an 'Explicit Binding.' you must bind the 'this' keyword to a different object when you call the function. so you can give one object, another objects properties.

*
* write out a code example of each explanation above
*/

//--------------------------------------------- Principle 1

function globalThis(globalbind) {
    console.log("I am a globally bound 'this'");
    console.log(this);
    return globalbind;
}
globalThis("I am globally bound and I reference the entire window/console when I am called.");

//----------------------------------------------Principle 2

const implicitBind = {
    implied: 'true',
    sayWhereIAm: function (boundwhere) {
        console.log(`${this.implied}, I am an ${boundwhere} "this" reference.`);
        console.log(this);
    }
};
implicitBind.sayWhereIAm('implied');

//--------------------------------------------- Principle 3

function NewObj(objname) {
    this.say = 'I am a new Binding named ';
    this.objname = objname;
    this.exclaim = function () {
        console.log(this.say + this.objname);
        console.log(this);
    }
};

const objOne = new NewObj('Object One');
const objTwo = new NewObj('Object Two');

objOne.exclaim();
objTwo.exclaim();

//--------------------------------------------- Principle 4

// REFERENCING ABOVE CODE, .call and .apply WILL EXPLICITELY BIND one object with another objects properties, 
// essentially overwriting the originally referenced object.

objOne.exclaim.call(objTwo);
objTwo.exclaim.apply(objOne);