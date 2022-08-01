export function cleanToTextArea() {
  const fromText = document.querySelector(".from-text");
  const toText = document.querySelector(".to-text");
  if (!fromText.value) {
    toText.value = "";
  }
}
