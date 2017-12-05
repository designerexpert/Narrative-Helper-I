# Narrative-Helper-I

# Purpose:
1. To assist physicians with medical documentation.
2. Reduce duplication of work in the medical field.
3. Help physicians get back to talking with their patients, instead of typing at the computer.

# Functionality:
1. Permit: definition of Keywords via a Right Click Menu.
2. Permit: definitions of Templates via a Right Click Menu.
3. Suggest: corrections for medical terms that may be misspelled.
4. Suggest: common sentences based on Keywords entered as you type.
5. Suggest: insertion of  Templates for specific Diagnostics / Keywords.

# Architecture:
![architecture_v_001](https://user-images.githubusercontent.com/20391435/33628636-657ba17c-d9cf-11e7-881c-9b6e3d13e25b.JPG)

# Implementation:
## Permit: definition of Keywords via a Right Click Menu.
1. Upon (Right Clicking) a Highlighted Word on a text field, or empty space.
    * Bring Up a Menu containing option: “Add to list of keywords”
        1. Same Menu must contain: Input Field for typing in the keyword if no text was highlighted.

## Permit: definitions of Templates via a Right Click Menu.
1. Upon (Right Clicking) a Highlighted Text Block on a text field, or empty space.
    * Bring Up a Menu containing option: “Create Template”
        1. Contains an Input Field for: “Template Name” & “Connected Keyword”
        2. Contains an Input Field for typing in the Template if no text was highlighted.

## Suggest: corrections for medical terms that may be misspelled.
1. Listen for space to be hit on keyboard or a pause period of 1 second
    * Each time, check if the last word entered is in the list of “Keywords”
        1. If word is a keyword: ignore spell check and perform suggestions.
        2. If word is not a keyword: perform spell check based on Medical Terms / Keywords
        * Functionality to be implemented later on.
            1. Bring up suggestions based on letters in the word
            2. Letters must be contained in the same order on another word
            3. Rank up results based on amount of matching letters.

## Suggest: common sentences based on Keywords entered as you type.
1. Listen for space to be hit on keyboard or a pause period of 1 second
    * Each time, check if the last word entered is in the list of “Keywords”
        1. If word is a keyword: display the 3 most common sentences it is used on.

## Suggest: insertion of  Templates for specific Diagnostics / Keywords.
1. Listen for space to be hit on keyboard or a pause period of 1 second
    * Each time, check if the last word entered is in the list of “Keywords”
        1. If word is a keyword: find out if it has templates assigned to it
        2. If templates are assigned to keyword
        3. Show a button to the left of sentence suggestions.
            * Button contains text: `Add ${Keyword} Diagnostic Template?`


