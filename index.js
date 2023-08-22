function removeUpgradeButton() {
  const upgradeToPlusButton = document.querySelectorAll(
    ".flex.px-3.min-h-\\[44px\\].py-1.items-center.gap-3.transition-colors.duration-200.text-white.cursor-pointer",
    ".text-sm.hover\\:bg-gray-800.rounded-md"
  )[0]; //gets the "upgrade to plus" button element

  if (upgradeToPlusButton && upgradeToPlusButton.role !== "menuitem") {
    upgradeToPlusButton.remove();
    //if exists in page and isn't a button in the profile menu then remove it
  }
}

function updateChatGptIcons() {
  const ChatGptIcons = document.querySelectorAll(
    ".relative.p-1.rounded-sm.h-\\[30px\\].w-\\[30px\\].text-white.flex.items-center.justify-center"
  ); //gets an array of elements of chatgpt icons from responses

  if (ChatGptIcons) {
    //if they are in the page
    ChatGptIcons.forEach((element) => {
      element.style.backgroundColor = "#715fde";
      //replace the background of each one of them to the chatgpt-purple color
    });
  }
}

function changeButtonBackgroundColor() {
  const button = document.querySelector(
    ".absolute.p-1.rounded-md.right-2.disabled\\:text-gray-400",
    ".enabled\\:bg-brand-purple.text-white.transition-colors.disabled\\:opacity-40"
  ); //get the send button element

  if (button) {
    //if the button exists on the page
    const style = button.getAttribute("style");
    //gets it's style
    if (style && style.includes("background-color")) {
      //if the style includes a background-color
      button.style.backgroundColor = "#715fde";
      //change the background color to chatgpt-purple color
    }
  }
}

/*
Currently causing weird freezes of the website so it is not included,
until i'll find a fix for that freeze issue.
 
function updateHeaderText() {
  const headerElement = document.querySelector(
    ".text-4xl.font-semibold.text-center.mt-6.ml-auto.mr-auto.mb-4.sm\\:mb-16.flex.gap-2.items-center.justify-center"
  );
 
  if (headerElement) {
    headerElement.innerHTML =
      'ChatGPT <span class="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xl font-semibold uppercase text-gray-800">PLUS</span>';
  }
}
*/

function handleMutations() {
  removeUpgradeButton();
  changeButtonBackgroundColor();
  updateChatGptIcons();
}

const observer = new MutationObserver(handleMutations);
//creates a new observer that always looking for page changes
//and if there are changes it will run the functions that are changing the page content
observer.observe(document.body, { childList: true, subtree: true });

if (document.readyState !== "loading") {
  //if the page isn't loading anymore run the functions
  handleMutations();
} else {
  //if the page is still loading wait to finish and then run the functions
  document.addEventListener("DOMContentLoaded", handleMutations);
}
