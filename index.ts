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

if (typeof document !== "undefined") {
    document.querySelector("#status").innerHTML += `<p>${JSON.stringify(map1)}</p>`;
    document.querySelector("#status").innerHTML += `<p>${JSON.stringify(map2)}</p>`;
}
else {
    console.log(map1);
    console.log(map2);
}