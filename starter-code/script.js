const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeArticle);
});

/************* Change Tab Focus k/b *********/

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
    tabs[tabFocus].setAttribute("aria-selected", false);

    if (e.keyCode === keydownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].setAttribute("aria-selected", true);
    } else {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].setAttribute("aria-selected", true);
    }
    tabs[tabFocus].focus();
  }
}

/************* Change Diplayed Info on-click *********/

function changeArticle(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  hideContent(mainContainer, "article");
  showContent(mainContainer, [`#${targetPanel}`]);

  hideContent(mainContainer, "picture");
  showContent(mainContainer, [`#${targetImage}`]);
  console.log(targetImage);
}

function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach((item) => {
    item.setAttribute("hidden", true);
  });
}
function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}
