# Gliphy-Project

## Creator/Student

Tracy Meade

## Overview

This project demonstrates the Giphy GIF search API functionality. The user enters a search term, and an HTTPS request to the Giphy GIF search endpoint is made using the JavaScript Fetch API. The returned JSON data is used to display the GIFs.

The number of GIFs returned is determined by the "Max # GIFs" integer field. The default value is 20, and the user can specify any number between 1 and 50.

The GIFs are displayed in a flex container, which is responsive to the current view size of the page. Using the Media Query functionality of CSS, at view sizes with a width of 328 pixels or less, the display shifts to a vertical presentation where the controls and GIFs are presented in a stacked configuration.

There is a fixed navigation bar at the top of the page with the buttons "About" and "Contact". These buttons will each display a modal dialog.

## Implementation and Usage

This project uses standard HTML, CSS, and JavaScript, and can be run directly in a web browser with no back-end server requirement. This is a single page application.

In order to make calls to the GIPHY API, an API key was obtained and is used for each call to the GIF search endpoint. This is a beta developer key and is limited in the number of GIFs returned per call (50), and the number of calls per hour (100).

## Ideas for Future Enchancement and Improvement

- Allow the user to specify the page of the returned results to display, otherwise you will always show the same GIFs for each unique search.
- Provide a button to prevent the clearing of the previously searched and displayed GIFs.
- Display each GIFs meta-data when the user hovers the mouse cursor over each image.
- Use cookies to store previous search terms used for reuse.
