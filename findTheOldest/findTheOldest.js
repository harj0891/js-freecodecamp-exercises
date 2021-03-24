

function getAge(birthYear,deathYear) {    
    if (!deathYear) {
        deathYear = currentYear = new Date().getFullYear();
    } 

    return deathYear - birthYear;
}

let findTheOldest = function(people) {

    let oldest = people.reduce((previousPerson, currentPerson)  => {
        const previousPersonAge = getAge(previousPerson.yearOfBirth,previousPerson.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);

        return previousPersonAge < currentPersonAge ? currentPerson : previousPerson;

    });

    return oldest;

    
    // let ageArray = people.map(person => {
    //     let currentAge;

    //     // set person age
    //     if (person.hasOwnProperty("yearOfDeath") ) {
    //         currentAge = person.yearOfDeath - person.yearOfBirth;
    //         person.age = currentAge;
    //     } else {
    //         let currentYear = new Date().getFullYear();
    //         currentAge = currentYear - person.yearOfBirth;
    //         person.age = currentAge;
    //     }
    //     return person;
    // });

    // let sortedArr = [...ageArray].sort((a, b) => b.age - a.age);
    
    // return sortedArr[0];



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
