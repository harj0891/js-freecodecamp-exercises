const getTheTitles = function(books) {

    let titleArray = [];

    for (book in books) {
        titleArray.push(books[book].title);
    }


    return titleArray;

}

module.exports = getTheTitles;
