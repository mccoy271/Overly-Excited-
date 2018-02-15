var sentence = ["The ", "walrus ", "danced ", "through ", "the ", "trees ", "in ", "the ", "light ", "of ", "the ", "moon "];

var words = [];
function addExcitement (theWordArray, exclaim) {
    for ( var i=0; i < theWordArray.length; i++ ){
        words += theWordArray[i];
        console.log(words);
        let third = i +1;
        let counter = third / 3;
        let excite = exclaim;
        if (third % 3 === 0) {
            words += excite.repeat(counter);
            console.log(words);
        }
    }
}
addExcitement(sentence, "!");