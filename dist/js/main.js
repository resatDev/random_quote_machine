/*Getting random color and quote number*/
//Getting random color as Hexademical number like #AAAAAA
function getRandomColor(){
    var a = "0123456789ABCDEF";
    var color = '#';
    for(var i = 0; i < 6; i++){
        color += a[Math.floor(Math.random() * 16)];
    }
    return color;
}
//Getting random number between 0 and 11 as natural number
function getRandomNumber(){
    var random_num = Math.floor(Math.random() * 11);
    return random_num;
}


/*Setting random color and quote number*/
//Setting and applying the random color and background color to related tags.
function setRandomColor(){
    var color = getRandomColor();
    document.getElementById("body").style.backgroundColor = color;
    document.getElementById("body").style.transition = "all 0.4s";
    document.getElementById("btn_social").style.backgroundColor = color;
    document.getElementById("btn_social").style.transition = "all 0.4s";
    document.getElementById("btn_tumblr").style.backgroundColor = color;
    document.getElementById("btn_tumblr").style.transition = "all 0.4s";
    document.getElementById("btn_twitter").style.backgroundColor = color;
    document.getElementById("btn_twitter").style.transition = "all 0.4s";
    document.querySelector(".container__quote_area__qwrite").style.color = color;
    document.querySelector(".container__quote_area__qwrite").style.transition = "all 0.4s";
    document.querySelector(".container__quote_area__qwriter").style.color = color;
    document.querySelector(".container__quote_area__qwriter").style.transition = "all 0.4s";
}
//Setting and applying the random quotes and writers to related tags.
function setRandomQuote(){
    var rand_num = getRandomNumber();
    var quotes = ["I love you the more in that I believe you had liked me for my own sake and for nothing else.",
                  "But man is not made for defeat. A man can be destroyed but not defeated.",
                  "When you reach the end of your rope, tie a knot in it and hang on.",
                  "There is nothing permanent except change.",
                  "You cannot shake hands with a clenched fist.",
                  "Let us sacrifice our today so that our children can have a better tomorrow.",
                  "It is better to be feared than loved, if you cannot be both.",
                  "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
                  "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
                  "Learning never exhausts the mind.",
                  "There is no charm equal to tenderness of heart."
                  
                ];
    var writer = ["John Keats","Ernest Hemingway","Franklin D. Roosevelt", "Heraclitus", "Indira Gandhi", "A. P. J. Abdul Kalam",
                  "Niccolo Machiavelli", "Amelia Earhart", "Henry James", "Leonardo da Vinci", "Jane Austen"
                ];
    
    document.getElementById("quote").innerHTML = quotes[rand_num];
    document.querySelector(".container__quote_area__qwriter").innerHTML = "- " + writer[rand_num];
}
//Combine the settings processing into a single function to assign the single button
function setRandomComplete(){
    setRandomQuote();
    setRandomColor();
}
//Sharing the quotes and writers in twitter
function twitter_share(){
    var currentQuote = document.getElementById("quote").innerHTML;
    var currentAuthor = document.querySelector(".container__quote_area__qwriter").innerHTML;
    var twitter_windows = window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    if(twitter_windows.focus){
        twitter_windows.focus();
    }
    return false;
}
//Sharing the quotes and writers in tumblr
function tumblr_share(){
    var currentQuote = document.getElementById("quote").innerHTML;
    var currentAuthor = document.querySelector(".container__quote_area__qwriter").innerHTML;
    var twitter_windows = window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    if(twitter_windows.focus){
        twitter_windows.focus();
    }
    return false;
}