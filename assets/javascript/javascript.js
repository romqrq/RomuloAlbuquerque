
function openAbout() {
  document.getElementById("sidenav-about").style.width = "45vw";
  document.getElementById("sidenav-resume").style.width = "0";
  document.getElementById("sidenav-portfolio").style.width = "0";
  document.getElementById("sidenav-contact").style.width = "0";
}
function openResume() {
  document.getElementById("sidenav-about").style.width = "0";
  document.getElementById("sidenav-resume").style.width = "45vw";
  document.getElementById("sidenav-portfolio").style.width = "0";
  document.getElementById("sidenav-contact").style.width = "0";
}
function openPortfolio() {
  document.getElementById("sidenav-about").style.width = "0";
  document.getElementById("sidenav-resume").style.width = "0";
  document.getElementById("sidenav-portfolio").style.width = "45vw";
  document.getElementById("sidenav-contact").style.width = "0";
}
function openContact() {
  document.getElementById("sidenav-about").style.width = "0";
  document.getElementById("sidenav-resume").style.width = "0";
  document.getElementById("sidenav-portfolio").style.width = "0";
  document.getElementById("sidenav-contact").style.width = "45vw";
}




