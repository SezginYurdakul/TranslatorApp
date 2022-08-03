
export const toHtmlElement = (htmlStr) => {
    const template = document.createElement("template");
    template.innerHTML = htmlStr.trim();
    return template.content.firstChild;
  };