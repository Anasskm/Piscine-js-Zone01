const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

const  clone1 = person
const  clone2 = person
Object.freeze(clone1 ,clone2)
person.age +=1 
person.country = 'FR'
const  samePerson = person