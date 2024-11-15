function countSentence() {
    var  str = "Enter a sentence:";;
    var i = 0;
    var NB_C = 0; 
    var NB_V = 0; 
    var NB_W = 1; 


    while (str[i] !== ".") {
        NB_C++; 


        if (str[i] === " ") {
            NB_W++;
        }


        if ("aeiou".includes(str[i].toLowerCase())) {
            NB_V++;
        }

        i++; 
    }


    console.log("Number of characters:", NB_C);
    console.log("Number of vowels:", NB_V);
    console.log("Number of words:", NB_W);
}


countSentence();