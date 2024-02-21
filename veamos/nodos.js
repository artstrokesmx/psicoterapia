const principal = document.querySelector('main')

const titulo = document.createElement('section')
    titulo.id = 'titulo'

const h1 = document.createElement('h1')
const texth1 = document.createTextNode('Centro de terapia psicológica')


principal.appendChild(titulo)
titulo.appendChild(h1)
h1.appendChild(texth1)

///////////

const presentacion = document.createElement('section')
    presentacion.id = 'presentacion'
const h2presentacion = document.createElement('h2')
const ppresentacion = document.createElement('p')
const texth2presentacion = document.createTextNode('Quienes somos')
const textppresentacion = document.createTextNode('Somos un conjunto de terapeutas que ponemos nuestro talento y conocimiento al alcance de las personas que quieren mejorar su calidad de vida, de relaciones y de hábitos')

principal.appendChild(presentacion)
presentacion.appendChild(h2presentacion)
presentacion.appendChild(ppresentacion)
h2presentacion.appendChild(texth2presentacion)
ppresentacion.appendChild(textppresentacion)

///////

const servicios = document.createElement('section')
    servicios.id = 'servicios'
const h2servicios = document.createElement('h2')
const pservicios = document.createElement('p')
const texth2servicios = document.createTextNode('Que servicios tenemos')
const textpservicios = document.createTextNode('La terapia psicológica es nuestra vida')

principal.appendChild(servicios)
servicios.appendChild(h2servicios)
servicios.appendChild(pservicios)
h2servicios.appendChild(texth2servicios)
pservicios.appendChild(textpservicios)