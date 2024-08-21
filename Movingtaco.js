// Declare a variable to store the interval ID, which will control the movement
var intervalID;

// A variable to keep track of whether the image is moving downwards or upwards
var goingDown = true;

// This function is called when the "START" button is clicked
function start() 
{
    // Disable the "START" button to prevent clicking it again while the image is moving
    document.getElementById("start").disabled = true;

    // Enable the "STOP" button so the user can stop the image movement
    document.getElementById("stop").disabled = false;

    // Call the function that starts moving the image
    intervalStart();
}

// This function is called when the "STOP" button is clicked
function stop()
 {
    // Disable the "STOP" button to prevent clicking it again after stopping
    document.getElementById("stop").disabled = true;

    // Enable the "START" button so the user can start the movement again
    document.getElementById("start").disabled = false;

    // Call the function that stops the image movement
    intervalStop();
}

// This function handles the movement of the image
function intervalStart() 
{
    // Get the image element using its ID 
    var image = document.getElementById("taco");

    // Set the starting position of the image (left and top position in pixels)
    var leftPos = 100;
    var topPos = 100;

    // Set the amount by which the image will move each time (10 pixels)
    var change = 10;

    // Start an interval to move the image every 50 milliseconds
    intervalID = setInterval(function () 
    {
        // Update the position of the image
        image.style.left = leftPos + "px";
        image.style.top = topPos + "px";

        // Move the image to the right by increasing the left position
        leftPos += change;

        // Check if the image is moving downwards
        if (goingDown) 
{
            // If it is, move the image down by increasing the top position
            topPos += change;

            // If the image reaches the bottom limit (600 pixels), change direction to move upwards
            if (topPos > 600) {
                goingDown = false;
            }
} else 
{
            // If the image is moving upwards, decrease the top position to move it up
            topPos -= change;

            // If the image reaches the top limit (100 pixels), change direction to move downwards
            if (topPos < 100) 
            {
                goingDown = true;
            }
}

    }, 50); // Move the image every 50 milliseconds for faster movement
}

// This function stops the movement of the image
function intervalStop() 
{
    // Clear the interval, which stops the movement of the image
    clearInterval(intervalID);
}