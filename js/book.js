class Book {
	/**
	 * @param {{author: string; bookName: string; _id: string}} book 
	 */
	createBook = (book) => {
		const newBook = document.createElement('div');
		newBook.classList.add('book');
		newBook.id = book._id;

		newBook.innerHTML = `
			<div class="book__text">
				<p class="font-weight-light">${book.author}</p>
				<p class="font-weight-light">${book.bookName}</p>
			</div>

			<div class="books__btns">
				<button type="button" onclick="console.log(${book._id})" class="btn btn-outline-info btn-sm">Изменить</button>

				<button type="button" onclick="store.deleteBook('${book._id}')" class="btn btn-outline-danger btn-sm">Удалить</button>
			</div>
		`

		return newBook;
	};
}

const book = new Book();
