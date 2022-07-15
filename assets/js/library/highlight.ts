import highlight from "highlight.js";

window.addEventListener("load", (): void => {
   document.querySelectorAll("pre code").forEach((el: Element): void => {
      highlight.highlightBlock(el as HTMLElement);
   });
});
