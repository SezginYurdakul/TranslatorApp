export const createTranslateView = () => {
  const htmlString = String.raw`<div id="translateFrame">
    <div class="outercontainer">
    <div> <h1>HYF TRANSLATE</h1></div>
    <div class="innercontainer">
    <div class="text-input">
      <textarea spellcheck="false" class="from-text" placeholder="Enter text"></textarea>
      <textarea spellcheck="false" readonly disabled class="to-text" placeholder="Translation"></textarea>
    </div>
    <ul class="controls">
      <li class="row from">
        <div class="icons">
          <i id="leftV" class="material-icons ">volume_up</i>
          <i id="leftC" class="material-icons copy">content_copy</i>
        </div>
        <select></select>
      </li>
      <li class="exchange"><i id="swapL" class="material-icons ">swap_horiz</i></li>
      <li class="row to">
        <select></select>
        <div class="icons">
          <i id="rigthV" class="material-icons ">volume_up</i>
          <i id="rigthC" class="material-icons copy">content_copy</i>
        </div>
      </li>
    </ul>
    </div>
    <button class="button" >Translate Text</button>
    <button class="button" id="showHistory">Show History</button>
    </div>
    </div>`;
  return toHtmlElement(htmlString);
};

const toHtmlElement = (htmlStr) => {
  const template = document.createElement("template");
  template.innerHTML = htmlStr.trim();
  return template.content.firstChild;
};
