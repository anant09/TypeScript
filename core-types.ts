enum Role {ADMIN,READ_ONLY,AUTHOR};

const person = {
name: 'hola',
age: 69,
hobbies: ['sports', 'cooking'],
role: Role.AUTHOR
};
console.log(person);

person.hobbies.forEach((card, index )=> {
    console.log(card + index);
})

if(person.role === Role.AUTHOR)
{
    console.log("found an authotr");
}