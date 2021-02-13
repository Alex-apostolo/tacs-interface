// Keeps a track of the browse_widgets on the DOM
let browse_widgets = 1;

const add_browse_widget = document.getElementById('add-browse-widget');
add_browse_widget.addEventListener('click', () => {
    // Create new browse_widget and append it
    browse_widgets++;
    const previous_id = 'browse-widget' + (browse_widgets - 1);
    const previous_node = document.getElementById(previous_id);

    const new_id = 'browse-widget' + browse_widgets;
    const new_node = previous_node.cloneNode(true);
    new_node.id = new_id;

    previous_node.after(new_node);

})