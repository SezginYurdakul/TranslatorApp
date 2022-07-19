const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");


export   function cleanToTextArea(){
    if (!fromText.value) {
      toText.value = "";
    }
};