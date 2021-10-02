import highlight from "highlight.js";
// import "highlight.js/scss/atom-one-dark.scss";

window.addEventListener("load", (): void => {
   document.querySelectorAll("pre code").forEach((el: Element): void => {
      highlight.highlightBlock(el as HTMLElement);
   });
});
