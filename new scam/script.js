document.addEventListener('DOMContentLoaded', (event) => {
    const outputElement = document.getElementById('terminal-output');
    const fullText = `
> Initiating Diagnostic Sequence...
> Checking Core System Integrity...
> STATUS: INCONCLUSIVE
> MODULE: [COMMUNICATIONS] STATE: FAILURE
> MODULE: [DATA_LINK] STATE: UNSTABLE
> OPERATION HALTED. EXECUTION CANCELLED.
> DEVICE LOCK ENGAGED.
    `;
    let i = 0;
    
    // Function to simulate typing
    function typeWriter() {
        if (i < fullText.length) {
            // Append the next character
            outputElement.innerHTML += fullText.charAt(i);
            i++;
            // Call the function again after a short delay
            setTimeout(typeWriter, 10); // Speed: 10ms per character
        }
    }

    // Start the typing effect when the screen loads
    outputElement.innerHTML = ''; // Clear initial text
    typeWriter();
});