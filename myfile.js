function getTheTitles(books){
    const titulos = books.map(books => books.title);
    console.log(titulos);
    return titulos;
};

const books = [
    {
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Marquez'
    },
    {
        title: 'Don Quijote de la Mancha',
        author: 'Miguel de Cervantes'
    },
    {
        title: 'Tu Persona Vitamina',
        author: 'Marian Rojas Estape'
    },
    {
      title: 'Física General',
      author: 'Alvarenga'
    }
];

const boton = document.querySelector('button');
const resultado = document.getElementById('resultado');
boton.addEventListener("click", () => {
    const result = getTheTitles(books);
    resultado.textContent = result;  
});