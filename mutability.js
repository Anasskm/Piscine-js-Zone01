const clone1 = Object.assign({}, person);
const clone2 = Object.assign({}, person);
const samePerson = Object.assign({}, person);
Object.freeze(clone1 ,clone2)
person.age +=1 
person.country = 'FR'

