// Initialization method used to create input fields based on the maxItems
export default function form(maxItems) {
    // Add button browse
    const addBtnBrowse = document.getElementById('add-btn-browse');

    for (let i = 0; i < maxItems; i++) {
        // Get previous browse element
        const previousBrowse = document.getElementById('browse0');

        // Create new browse element
        const newBrowse = previousBrowse.cloneNode(true);
        newBrowse.id = 'browse' + i;
        newBrowse.classList.add('browse-with-minus');

        // Create newMinus 
        const newMinus = document.createElement('div');
        newMinus.classList.add('minus-btn');
        newMinus.setAttribute('data-index', i);
        // Adds event listener to newMinus
        newMinus.addEventListener('click', () => {
            addBtnBrowse.hidden = false;
            // Hides associated element
            document.getElementById('browse' + newMinus.dataset.index).style.display = 'none';

            const browseInput = document.querySelector('#browse' + newMinus.dataset.index + ' input');
            browseInput.value = '';
        });

        // Append newMinus
        newBrowse.append(newMinus);
        newBrowse.style.display = 'none';

        // Insert before add button
        addBtnBrowse.before(newBrowse);
    }

    // Listen for clicks and add elements
    addBtnBrowse.addEventListener('click', () => {
        // Find the next element with display attribute set to none and set it to flex
        for (let i = 0; i < maxItems; i++) {
            let temp = document.getElementById('browse' + i);
            if (temp.style.display === 'none') {
                temp.style.display = 'flex';
                addBtnBrowse.before(temp);
                break;
            }
            // Hide add button when element before maxItems has been reached
            if (i === maxItems - 2)
                addBtnBrowse.hidden = true;
        }
    });
}

