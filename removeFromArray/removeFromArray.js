const removeFromArray = function() {
    
    let allArgs = Array.from(arguments);
    let originalArray = [];
    let itemsToRemoveArray = [];
    let newArray =[];

    // popullate arrays to have list of all array items, and then a list of items to remove from it
    allArgs.forEach(element => {
        if (Array.isArray(element)) {
            originalArray = element;
        } else {
            itemsToRemoveArray.push(element);
        }
    });

    console.log("arguments: " + allArgs);
    console.log("originalArray: " + originalArray);
    console.log("itemsToRemoveArray: " + itemsToRemoveArray);

    // add items to newarray that don't exist in both arrays
    // for(i=0; i < originalArray.length; i++) {
    //     for (j=0; j < itemsToRemoveArray.length; j++) {
    //         if (originalArray[i] === itemsToRemoveArray[j]) {
    //             // do nothing since match
    //             console.log("dont match: " + originalArray[i] + " and " + itemsToRemoveArray[j])
    //         } else {
    //             console.log("match: " + originalArray[i] + " and " + itemsToRemoveArray[j])
    //             newArray.push(originalArray[i]);
    //         }
    //     }
    // }

    newArray = originalArray.filter(
        val => !itemsToRemoveArray.includes(val)
    );

    console.log(newArray);
    return newArray;

}

module.exports = removeFromArray
