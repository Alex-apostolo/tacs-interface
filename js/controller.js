const backend = 'http://127.0.0.1:5000'

// Add event listener for submitting the files
const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData();
    const browseInput = document.querySelectorAll('browse-input');
    const groups = [];

    browseInput.forEach(selectedInput => {
        const selectedFiles = selectedInput.querySelectorAll('input');
        selectedFiles.forEach(selectedFiles => {
            if (selectedFiles.files.length !== 0)
                groups.push(selectedFiles.files.length);
            for (let i = 0; i < selectedFiles.files.length; i++) {
                // Add additional data to file to indicate that its in a specific group
                formData.append('file', selectedFiles.files[i]);
            }
        });
    });

    fetch(backend + '/tacs', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(response => {
            console.log(groups);
            console.log(response);
            responseHandler(groups, response);
            // Iterate through all the files and combine the frequency counter

            // If more than one group is used, then calculate their general parts and compare
            // Display first five in Specific field
        });
});

function responseHandler(groups, response) {
    document.querySelector('main').style.display = 'block';
    document.getElementById('pagebrake').scrollIntoView({
        behavior: 'smooth'
    });
    // If there is one file then display only the specific section
    if (response.length === 1) {
        console.log('success')
        document.getElementById('general-section').style.display = 'none';
        document.getElementById('comparisson-section').style.display = 'none';
    }
    // If there is more than one file on the same group create the general and specific section
    if (groups.length === 1 && response.length > 1) {
        document.getElementById('general-section').style.display = 'flex';
        document.getElementById('comparisson-section').style.display = 'none';
    }
    // If there is multiple groups then create the general, comparisson, specific section
    if (groups.length > 1) {
        document.getElementById('general-section').style.display = 'flex';
        document.getElementById('comparisson-section').style.display = 'flex';
    }
    
    response.forEach(element => {
        console.log('Processing ', element[0]);

    });
}