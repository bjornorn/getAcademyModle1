header();
function header() {
  document.getElementById('header').innerHTML = `
    <object id="header" type="text/html" data="header.html"></object>
    `;
}
sidebar();
function sidebar() {
  document.getElementById('sidebar').innerHTML = `
    <object id="sidebar" type="text/html" data="sidebar.html"></object>
    `;
}
mainContent();
function mainContent() {
  document.getElementById('mainContent').innerHTML = `
    <object id="mainContent" type="text/html" data="mainContent.html"></object>
    `;
}
footer();
function footer() {
  document.getElementById('footer').innerHTML = `
    <object id="footer" type="text/html" data="footer.html"></object>
    `;
}

console.log('test');
