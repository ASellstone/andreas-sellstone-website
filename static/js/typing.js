export default function initTyping() {
  const headerTypingElement = document.getElementById("header-typing");
  const paragraphTypingElement = document.getElementById("paragraph-typing");

  if (!headerTypingElement && !paragraphTypingElement) {
    return;
  }

  function typeText(element, text, delay, callback) {
    let index = 0;
    element.textContent = ""; // Start from clean state (remove &nbsp;)
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else {
        if (callback) callback();
      }
    }
    type();
  }

  // 1. Set initial placeholder to prevent layout shift
  headerTypingElement.textContent = "";
  paragraphTypingElement.textContent = "\u00A0"; // &nbsp;

  // 2. Start typing after a brief delay
  setTimeout(() => {
    headerTypingElement.classList.add("typing-cursor");

    typeText(headerTypingElement, "Hello, I'm Andreas.", 50, () => {
      setTimeout(() => {
        // 3. Move blinking cursor to paragraph
        headerTypingElement.classList.remove("typing-cursor");
        paragraphTypingElement.classList.add("typing-cursor");

        typeText(paragraphTypingElement, "Scroll down to see my work...", 50);
      }, 1000);
    });
  }, 500);
}
