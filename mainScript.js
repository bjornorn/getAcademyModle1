let test = 'hei';


updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
<div>Hei og hå</div>

`;
    sideBarRock();
}
console.log(test)


function sideBarRock() {
    document.getElementById('app').innerHTML = `
    <a href="info-html.html" target="_parent">HTML Notater</a>
    <h2 >CSS</h2>    
    <a href="info-css.html" target="_parent">CSS Notater</a>    
    <h2>SVG</h2>
    <a href="learning-svg/info-svg.html" target="_parent">SVG Notater</a>   
    <a href="learning-svg/snow-man.html" target="_parent">Snømann</a>   
    <a href="/learning-svg/snow-woman.html" target="main-content">Snøkvinne</a> 
    <h2>JavaScript</h2>
    <a href="/learning-javascript/info-javascript.html" target="main-content">JavaScript Notater</a>
    <a href="/learning-javascript/uke2-oppgave1.html" target="main-content">Oppgave 1: OneClick</a>
    <a href="/learning-javascript/uke2-oppgave2.html" target="main-content">Oppgave 2: TestOnLoad</a>
    <a href="/learning-javascript/uke2-oppgave3.html" target="main-content">Oppgave 3: This</a>
    <a href="/learning-javascript/uke2-oppgave4.html" target="main-content">Oppgave 4:</a>
    <a href="/learning-javascript/uke2-oppgave5.html" target="main-content">Oppgave 5</a>
    <a href="/learning-javascript/uke2-oppgave3.html" target="main-content">Oppgave 6</a> 
    <a href="/learning-javascript/uke2-oppgave7.html" target="main-content">Oppgave 7</a>
    `;
}