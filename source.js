async function loadFile(file) {
    let text = await file.text();
    console.log(text);


    let finalText = text.split('\n')
    console.log(finalText)


    let semifinalText = []

    finalText.forEach(line => {
        let linechars = line.split('')

        semifinalText.push(linechars)
    })

    console.log(semifinalText)


    
// tja contents

// title
var TITLE = "";
var titleFound = false;
var TITLEEN = "";
var titleENFound = false
var TITLEJA = "";
// var TITLECN;
// var TITLETW;
// var TITLEKO;


// subtitle/origin
var SUBTITLE = "";
var subtitleFound = false;
var SUBTITLEEN = "";
var subtitleENFound = false;
var SUBTITLEJA = "";
// var SUBTITLECN;
// var SUBTITLETW;
// var SUBTITLEKO;

//BPM
var BPM = "";

// WAVE / AUDIO
var WAVE = "";

// Offset
var OFFSET = "";

// demostart (preview)
var DEMOSTART = "";

// MAKER (beatmap creator)
var MAKER = "";

// SONGVOL (not useful)
var SONGVOL = "100";

// Sound Effect Volume (not useful)
var SEVOL = "100";

// HEADSCROLL (initial scroll speed, sometimes ignored)
var HEADSCROLL = "";

// BGIMG (background image)
var BGIMG = "";

// BGMOVIE (not implementing this)
var BGMOVIE = "";

// MOVIEOFFSET (not implementing this)
var MOVIEOFFSET = "";


// COURSE 
var COURSE = "";
/*
"Easy" or "0"
"Normal" or "1"
"Hard" or "2"
"Oni" or "3"
"Edit" or "4" - URA
*/


// BALLOON NOTES
var BALLOON = "";


/* # START

// var notes = [][];


each line is its own measure
0=blank, 1=don, 2=ka, 3=don(big), 4=ka(big)
5=drumdroll, 6=drumroll(big), 7=balloon
8=end of balloon or drumrool, 9=balloon
A=don(big), B=ka(big)





# END */





// reading every character in the file
for (let i = 0; i < semifinalText.length; i++) {
for (let j = 0; j < semifinalText[i].length; j++) {
    // main loop starts here


    if (titleFound == false || titleENFound == false){
        if (semifinalText[i][j] == "T" && semifinalText[i][j+1] == "I" && semifinalText[i][j+2] == "T" && semifinalText[i][j+3] == "L" && semifinalText[i][j+4] == "E") {
            if (semifinalText[i][j+5] == ":"){
    
             
                for (let index = 0; index < (semifinalText[i].length-6); index++){
                    TITLE += semifinalText[i][index+6];
                }   
             
                console.log("TITLE = " + TITLE)
                titleFound = true
            } 
            
            else if (semifinalText[i][j+5] == "E" && semifinalText[i][j+6] == "N"){
    
                for (let index =0; index < (semifinalText[i].length - 8); index++){
                    TITLEEN += semifinalText[i][index+8]
                }
                console.log("English Title = " + TITLEEN)
                titleENFound = true
            }
            else if (semifinalText[i][j+5] == "J" && semifinalText[i][j+6] == "A"){
                for (let index = 0; index < (semifinalText[i].length - 8); index++){
                    TITLEJA += semifinalText[i][index+8]
                }
                console.log("Japanese Title = " + TITLEJA)
            }
    }

    }
    if (subtitleFound == false || subtitleENFound == false){
        if (semifinalText[i][j] == "S" && semifinalText[i][j+1] == "U" && semifinalText[i][j+2] == "B"){
            if (semifinalText[i][j+8] == ":"){
                
                subtitleFound = true

                for (let index = 0; index < (semifinalText[i].length-9); index++){
                    SUBTITLE += semifinalText[i][index+9]
                }
                console.log("Subtitle = " + SUBTITLE)
            }

            else if (semifinalText[i][j+8] == "E") {
            

                for (let index = 0; index < (semifinalText[i].length-11); index++){
                    SUBTITLEEN += semifinalText[i][index+11]
                }
                console.log("English Subtitle = " + SUBTITLEEN)
                subtitleENFound = true
            }
        }
        

    }

}
}
}
