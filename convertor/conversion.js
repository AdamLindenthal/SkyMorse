/**
 * Module for converting the text to string representation of morse code transcription
 */
var table = {
    "A": ".-",
    "B" : "-...",
    "C" : "-.-.",
    "D" : "-..",
    "E" : ".",
    "F" : "..-.",
    "G" : "--.",
    "H" : "....",
    "I" : "..",
    "J" : ".---",
    "K" : "-.-",
    "L" : ".-..",
    "M" : "-- ",
    "N" : "-.",
    "O" : "---",
    "P" : ".--.",
    "Q" : "--.-",
    "R" : ".-.",
    "S" : "...",
    "T" : "-",
    "U" : "..-",
    "V" : "...-",
    "W" : ".--",
    "X" : "-..-",
    "Y" : "-.--",
    "Z" : "--..",
    "?" : "..--..",
    ","	: "--..--",
    "!" : "--...-",
    "." : ".-.-.-",
    ";" : "-.-.-.",
    "/" : "-..-.",
    "=" : "-...-",
    "-" : "-....-",
    "(" : "-.--.",
    ")" : "-.--.-",
    "\"" : ".-..-.",
    ":"	: "---...",
    "_"	: "..--.-",
    "@"	: ".--.-.",
    "1" : ".----",
    "2" : "..---",
    "3" : "...--",
    "4" : "....-",
    "5" : ".....",
    "6" : "-....",
    "7" : "--...",
    "8" : "---..",
    "9" : "----.",
    "0" : "-----"
}

module.exports = {
    toMorse: function (text) {
        var result = "";
        for (var i = 0, len = text.length; i < len; i++) {
            if ((text[i] == ' ') || (text[i] == '\t')) {
                result = result + " || ";
            } else {
                found = table[text[i].toUpperCase()];
                if (typeof found === 'undefined') {
                    result = result + '[' + text[i] + ']';
                } else {
                    result = result + table[text[i].toUpperCase()];
                }
                result += " ";
            }
        }
        return result;
    }

}


