const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textArea')

//hacemos que al ingresar a nuestra web el foco este en nuestro textArea

textArea.focus()

//agregamos un eventlistener en nuestro texArea para que lo que se tipee
//se vaya guardando como nuestra choice. teniendo en cuenta que se deben separar por comas y crear un array

textArea.addEventListener('keyup', e => {
  // console.log(e.target.value) toma el valor de e y lo mostramos en consola
  
  //llamamos a la funcion createTags para crear nuestras etiquetas
  createTags(e.target.value)

  //agregamos una escucha para que cuando presionemos ENTER
  //llame a la funcion RANDOM

  if( e.key === 'Enter' ){
    setTimeout(() => {
      
    }, 10);

    randomSelect()
    
  }

})

//definimos la funcion createTags
const createTags = ( input ) => { //recibo el valor como parametro
  //const tags = input.split(',') //lo que recibo lo "corto" cuando encuentro una coma y crea un elemento de array
  //la siguiente linea es igual a la aneterior pero arregla el problema con los espacios para que no se computen
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  //console.log(tags)
  //Ahora agreguemos esos textos a nuestras tags

  //tomamos el elemento tagsEL y lo limpiamos
    tagsEl.innerHTML = ''

  //ahora, para crear nuestros tags con cada texto, como estan almacenados en un array, utilizamos forEach
    tags.forEach( tag => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsEl.appendChild(tagEl)
    })
}

const randomSelect = () => {
  const times = 30

  const interval = setInterval(() => {
      const randomTag = pickRandomTag()

      highLightTag(randomTag)

        setTimeout(() => {
          unhighLightTag(randomTag)
        }, 100);

  }, 100);

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highLightTag(randomTag)
    }, 100);
  }, times * 100);

}

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

const highLightTag = (tag) => {
  tag.classList.add('highLight')
}
const unhighLightTag = (tag) => {
  tag.classList.remove('highLight')
}