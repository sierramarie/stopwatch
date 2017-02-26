document.querySelector('#start').addEventListener('click', stopWatch);
document.querySelector('#start').addEventListener('dblclick', resetWatch);

var seconds = 0;
var tenths = 0;
var minutes = 0;
var timer;

function stopWatch(e) {
    if (e.target.innerHTML === 'Start') {
    //     Start counting up, every 10th of a second
     //     Update the #timer inner HTML to follow this format: Minutes:Seconds:Tenths (00:00:00)
     //     Change the color of the timer text each second
    
        timer = setInterval(startTimer, 100);
    //     Change button to say "Pause"
        e.target.innerHTML = 'Pause';
    }
    // IF the button says start when you click it, start the timer couting AND change the button to say Pause. IF not, look at next statement. 

    else if (e.target.innerHTML === 'Pause') {
        // Pause the timer from counting up
        clearInterval(timer);
        // Change button to say "Resume"
        e.target.innerHTML = 'Resume';
    }
    // IF the timer says pause WHEN you click it to pause the timer AND change the button to say resume. IF NOT this or previous statement, look at next statement. 

    else if (e.target.innerHTML === 'Resume') {
         // Resume the count up
          timer = setInterval(startTimer, 100);

        // Change button to say "Pause"
            e.target.innerHTML = 'Pause';
    }
    // IF the button says Resume WHEN click it and start the timer AND change the button to say pause. 
}

function resetWatch(e) {
    if (e.target.innerHTML === 'Pause') {
     // Stop counting up
        clearInterval(timer);
    // stolen from else if{pause} to stop the timer. 
    // Reset the timer back to 0
    minutes = 0;
    seconds = 0;
    tenths = 0;
    // Update the #timer inner HTML to be something like 00:00:00
    document.querySelector('#time').innerHTML = `00 : 00 : 00 `;
    // changes the timer to be blank when you double click the pause button
    // Change button to say "Start"
        e.target.innerHTML = 'Start';
    }
    // IF you double click the button WHEN it says pause, stop counting, reset all numbers to 0 AND change button to say START.
}

function startTimer() {
    tenths++;
        if (tenths === 10) {
            seconds++;
            tenths = 0;
        }
        if (seconds === 30) {
            minutes++;
            seconds = 0;
         }
        
    document.querySelector('#time').innerHTML = `${minutes} : ${seconds} : ${tenths}`;
    // document.querySelector('#time').style.color = 'blue';
    // random color //
}
// If the timer is paused for 15 seconds: 
// Stop counting up
// Reset the timer back to 0
// Update the #timer inner HTML to be something like 00:00:00
// Change button to say "Start"

