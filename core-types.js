"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'hola',
    age: 69,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR
};
console.log(person);
person.hobbies.forEach(function (card, index) {
    console.log(card + index);
});
if (person.role === Role.AUTHOR) {
    console.log("found an authotr");
}
