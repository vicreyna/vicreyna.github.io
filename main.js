let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #5e5e5e;'>|</span>",});
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #5e5e5e;">Diseño páginas web y hago contenido sobre tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
