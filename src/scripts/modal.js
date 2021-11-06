export function fixBG() {
  document.getElementById("root").style.position = "fixed";
  document.getElementById("root").style.width = "100vw";
  document.getElementById("root").style.height = "100vh";
}

export function unfixBG() {
  document.getElementById("root").style.position = "unset";
  document.getElementById("root").style.width = "unset";
  document.getElementById("root").style.height = "unset";
}
