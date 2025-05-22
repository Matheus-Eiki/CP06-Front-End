document.addEventListener('DOMContentLoaded', function () {
  const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
  const bookList = document.getElementById('book-list');

  fetch(booksEndpoint)
    .then(response => response.json())
    .then(books => {
      books.forEach(book => {
        const bookElement = document.createElement('div');

        bookElement.id = `book-${book.id}`;

        bookElement.className = `
          bg-white rounded-2xl shadow-md p-4 flex flex-col
          transform hover:scale-105 hover:shadow-xl transition duration-300
        `;


        const formattedTitle = book.titulo.toLowerCase().replace(/\s+/g, '-');

        const link = book.link || `https://www.casadocodigo.com.br/products/livro-${formattedTitle}`;

        bookElement.innerHTML = `
          <h3 class="text-lg font-semibold text-gray-800 mb-2">${book.titulo}</h3>
          <img src="${book.imagem}" alt="${book.titulo}" class="w-full h-48 object-cover rounded mb-3">
          <p class="text-sm text-gray-600 mb-4">${book.resumo}</p>
          <a href="${link}" target="_blank"
             class="mt-auto w-fit text-xs px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Ver mais
          </a>
        `;

        bookList.appendChild(bookElement);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar os livros:', error);
    });
});
