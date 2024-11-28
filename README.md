
# Text-to-Speech Project

This is a simple Text-to-Speech (TTS) application built using JavaScript's `SpeechSynthesis` API. It allows users to input text, select a voice, and have the text read aloud using the selected voice.

## Features
- Dynamically populates a list of available voices supported by the browser.
- Allows users to select a preferred voice from the list.
- Reads aloud text entered in a textarea.
- Provides an alert if no text is entered before clicking "Speak."

## Requirements
- A modern browser with support for the `SpeechSynthesis` API (e.g., Chrome, Firefox, Edge).

---

## Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd text-to-speech
   ```
3. Open the `index.html` file in your browser.

---

## How It Works
1. **Voice Population**:
   - The `populateVoices` function retrieves all available voices and dynamically populates a `<select>` dropdown with their names and languages.
   - The default voice is marked in the list for user convenience.

2. **Voice Selection**:
   - When a user selects a voice from the dropdown, it updates the `speech.voice` property to use the selected voice.

3. **Text-to-Speech**:
   - When the "Speak" button is clicked, the application retrieves the text from the textarea and speaks it using the selected voice.

---

## How to Contribute

We welcome contributions to improve this project! Here’s how you can contribute:

1. **Fork the Repository**:
   - Click the "Fork" button on the repository page to create a copy in your GitHub account.

2. **Clone the Fork**:
   ```bash
   git clone <your-fork-url>
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**:
   - Add your feature or fix a bug in the codebase.

5. **Test Your Changes**:
   - Ensure your changes work as expected and do not break existing functionality.

6. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Add your descriptive commit message"
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**:
   - Go to the original repository and create a pull request from your branch.
   - Provide a clear description of your changes and why they are needed.

---

## Known Issues
- Some browsers may not immediately populate the voice list. Refreshing the page or triggering the `onvoiceschanged` event may resolve this.

---

Enjoy the project! Let me know if you have any suggestions or feedback. 😊
