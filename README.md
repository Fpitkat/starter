# Modal Window

This is a simple JavaScript project that demonstrates how to create and control a modal window in a web page. The modal window can be opened by clicking on any element with the class "show-modal", and can be closed by clicking on the overlay or the close button, or by pressing the Escape key.

## How it Works

The script first selects all the necessary DOM elements:

- The buttons that will open the modal (`openModelBtns`)
- The button that will close the modal (`closeModelBtn`)
- The overlay that appears when the modal is open (`overlay`)
- The modal itself (`modal`)

It then defines two functions, `openModal` and `closeModal`, which are used to open and close the modal window. These functions work by toggling the "hidden" class on the modal and the overlay.

The script then adds event listeners to the open buttons, the overlay, and the close button, so that they call the appropriate function when clicked.

Finally, the script adds an event listener to the document that listens for the "keydown" event. If the key pressed is the Escape key, and the modal is currently open (i.e., it does not have the "hidden" class), then the `closeModal` function is called.

## Usage

To use this script in your own project, simply include it in your HTML file, and make sure you have elements with the appropriate classes ("show-modal", "close-modal", "overlay", and "modal"). You can then customize the appearance and content of the modal by modifying the CSS and HTML of the modal element.
