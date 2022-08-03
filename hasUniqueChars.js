/*
Given a word, return true if that word contains only unique characters. Return false otherwise. Uppercase and lowercase letters should be considered separately

For example:
hasUniqueChars("Monday")
returns true

hasUniqueChars("Moonday")
returns false

hasUniqueChars("Bob")
returns true
*/


// Write your code below
function hasUniqueChars(word) {
    let uniqueChars = new Set();

    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i]);
    }

    return uniqueChars.size === word.length;
}
