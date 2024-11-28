let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

// Load voices
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // Clear existing options

    voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        if (voice.default) {
            option.textContent += " [Default]";
        }
        voiceSelect.appendChild(option);
    });

    // Set default voice
    speech.voice = voices[0];
}

// Listen for voice list changes
window.speechSynthesis.onvoiceschanged = populateVoices;

// Update the selected voice
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Speak text from textarea
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;

    if (speech.text.trim() === "") {
        alert("Please enter text to speak!");
        return;
    }

    window.speechSynthesis.speak(speech);
});
