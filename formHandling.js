// Keeps track of the browse elements on the DOM
let browseCount = 0;
const limit = 3;

// Listen for clicks and add elements
const addBtnBrowse = document.getElementById('add-btn-browse');
addBtnBrowse.addEventListener('click', () => {
    // return if the limit has been reached
    if (browseCount >= limit) {
        // Go through browse elements, check which have display of none and update them. If its the last element also hide the button.
        for(let i = 0; i < limit + 1; i++) {
            let temp = document.getElementById('browse' + i);
            if (temp.style.display === 'none'){
                temp.style.display = 'flex';
                addBtnBrowse.before(temp);
                break;
            }
        }
        for(let i = 0; i < limit + 1; i++) {
            if(document.getElementById('browse' + i).style.display === 'none') {
                break;
            }
            if (i === limit)
                addBtnBrowse.hidden = true;
        }
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
    newMinus.setAttribute('data-index', browseCount);

    // Append newMinus
    newBrowse.append(newMinus);

    // Adds event listener to newMinus
    newMinus.addEventListener('click', () => {
        addBtnBrowse.hidden = false;
        // Hides associated element
        document.getElementById('browse' + newMinus.dataset.index).style.display = 'none';

        const browseInput = document.querySelector('#browse' + newMinus.dataset.index + ' input');
        browseInput.value = '';
    });

    // Insert before add button
    addBtnBrowse.before(newBrowse);

    // If the limit is reached hide the add btn
    if (browseCount === limit) {
        addBtnBrowse.hidden = true;
    }
})