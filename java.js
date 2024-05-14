var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Elizabeth Joaquin Rosales')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora Frontend JR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante de ingenieria en sistemas</strong>')
    .pauseFor(1500)
    .start();

    