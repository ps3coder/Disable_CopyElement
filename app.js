document.oncontextmenu = (e) => {
  alert("Dont try right click");
  e.preventDefault();
  return false;
};

document.onkeydown = (e) => {
  if (e.key == "F12") {
    alert("Dont try to inspect element");
    return false;
  } else if (e.ctrlKey && e.key == "u") {
    alert("Dont try to view page source ");
    return false;
  } else if (e.ctrlKey && e.key == "c") {
    alert("Dont try to copy page element");
    return false;
  }
};

const content = document.querySelector(".main");
if (content) {
  content.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}
