import iassign = require('immutable-assign');

//iassign.freeze = true;
 
var map1 = { a:1, b:2, c:3 };
 
// 1: Calling iassign() to update map1.b, using overload 2 
var map2 = iassign(
    map1,
    (m) => {
        m.b = 50;
        return m;
    }
);

console.log(map1);
console.log(map2);
