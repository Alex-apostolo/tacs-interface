// Keeps track of the browse elements on the DOM
let browseCount = 0;
const limit = 3;

// Listen for clicks and add elements
const addBtnBrowse = document.getElementById('add-btn-browse');
addBtnBrowse.addEventListener('click', () => {
    // return if the limit has been reached
    if (browseCount >= limit) {
        return;
    }
    browseCount++;

    // Get previous browse element
    const previousBrowse = document.getElementById('browse0');

    // Create new browse element
    const newBrowse = previousBrowse.cloneNode(true);
    newBrowse.id = 'browse' + browseCount;
    newBrowse.classList.add('browse-with-minus');

    // Create newMinus 
    const newMinus = document.createElement('div');
    newMinus.nodeType = 'button';
    newMinus.classList.add('minus-btn');

    // Append to newMinus
    newBrowse.append(newMinus);

    // Adds event listener to newMinus
    newMinus.addEventListener('click', () => {
        // Removes associated browse_widget
        // Fixes the ordering of widgets
    });

    // Insert before add button
    addBtnBrowse.before(newBrowse);

    // If the limit is reached hide the add btn
    if (browseCount === limit) {
        addBtnBrowse.hidden = true;
    }
})