let findTheOldest = function(people) {

    let ageArray = people.map(person => {
        let currentAge;

        // set person age
        if (person.hasOwnProperty("yearOfDeath") ) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
            person.age = currentAge;
        } else {
            let currentYear = new Date().getFullYear();
            currentAge = currentYear - person.yearOfBirth;
            person.age = currentAge;
        }
        return person;
    });


    let sortedArr = [...ageArray].sort((a, b) => b.age - a.age);
    

    // let ageArray = people.reduce((previousPerson, currentPerson) => {
    //     let currentAge;
    //     let oldestPerson;

    //     console.log(`${currentPerson}`);

    //     // set person age
    //     if (currentPerson.hasOwnProperty("yearOfDeath") ) {
    //         currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    //         currentPerson.age = currentAge;
    //     } else {
    //         let currentYear = new Date().getFullYear();
    //         currentAge = currentYear - currentPerson.yearOfBirth;
    //         currentPerson.age = currentAge;
    //     }

        

        
    //     if (currentPerson.age > previousPerson.age) {
    //         oldestPerson = currentPerson;
    //     } else {
    //         oldestPerson = previousPerson;
    //     }

    //     // console.log(oldestPerson);
    //     return oldestPerson;
    // },0);

    


    return sortedArr[0];

}




const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      
    },
  ]

  console.log(findTheOldest(people));


module.exports = findTheOldest
